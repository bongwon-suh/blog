import { Request, response, Response } from 'express';
import passport from 'passport';
import asyncFunction from '../../lib/db';
import { generatePassword, checkUser } from '../../lib/auth';
// import { ControlFunction, ControlResult } from "lib/interface";
import LocalStrategy from 'passport-local';
import { User } from '../../models/User';
import { createConnection } from 'typeorm';
import { getConnection, getRepository } from 'typeorm';

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
        res.status(200).json('회원가입 완료')
    }
}

export const postLogin = function(req: Request, res: Response) {
    
    const response_msg = {
        "fail": false,
        "msg": ""
    }

    const user_id = req.body.user_id
    const passowrd = req.body.password
    console.log(user_id, passowrd + "컨트롤함수 내부")

    passport.authenticate('local', (err, user, info)=>{
        console.log("here")       
        checkUser(user_id, passowrd)
        .then( (user)=>{
            // Here User serialzed
            req.login(user, (err)=>{
                if(err) {
                    response_msg.fail = true;
                    response_msg.msg = '시스템 문제로 인해 로그인에 실패했습니다.'
                } else {
                    return res.json(response_msg);
                }
            });
        })
        .catch( (err)=>{
            // Failed to login    
            response_msg.fail = true;

            if(err.errno == 45028) {
                response_msg.msg = '데이터 서버와의 연결이 좋지 않습니다.'
            }
            else {
                response_msg.msg = '로그인에 실패했습니다.'
            }

            console.log(response_msg);
        
            res.json(response_msg);
        });
        
    })(req, res);
    
    return response_msg;
}

export const test = async function (req: Request, res: Response) {
    const username = await User.findOne({user_id: "spwsbw"})
    console.log(username)
}