import { Request, response, Response } from 'express';
import passport from 'passport';
import { generatePassword } from '../../lib/auth';
import { User } from '../../models/User';

export const signup = async function (req: Request, res: Response) {

    const user_id = req.body['user_id'];
    const password = generatePassword(req.body['password']);
    const confirm_password = generatePassword(req.body['confirm_password']);

    if (password != confirm_password) {
        res.status(409).json('비밀번호가 일치하지 않습니다.');
    }
    
    const isExistUser = await User.findOne({ user_id: user_id});
    if(isExistUser) {
        res.status(409).json('존재하는 계정입니다');
    }
    else {
        const user = new User();
        user.user_id = user_id;
        user.password = password;
        await user.save();
        res.status(200).json('회원가입 완료');
    }
}

export const login = async function(req: Request, res: Response) {
    const user_id = req.body.user_id;
    const password = generatePassword(req.body.password);
    
    const user = await User.findOne({user_id: user_id})
    if(user){
        if(password == user.password) {
            passport.authenticate('local', (err, user, info)=>{
                req.login(user, (err)=>{
                    if(err) res.status(402).json('실패');
                    else res.status(200).json('로그인 완료');
                })
            })(req, res);
        }
        else {
            res.status(401).json('비밀번호가 일치하지 않습니다.');
        }
    }
    else {
        res.status(404).json('회원가입을 진행해주세요.');
    }
}

export const test = async function (req: Request, res: Response) {
    console.log("=========로그인 테스트========")
    console.log(req.user)
    console.log("=================")
}