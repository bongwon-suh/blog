import { Request, response, Response } from 'express';
import passport from 'passport';
import asyncFunction from '../../lib/db';
import { generatePassword, checkUser } from '../../lib/auth';
// import { ControlFunction, ControlResult } from "lib/interface";
import LocalStrategy from 'passport-local';

export const postSignup = function (req: Request, res: Response) {
    const response_msg = {
        "fail": true,
        "msg": '',
        "data": {}
    }

    const user_id = req.body['user_id'];
    const password = generatePassword(req.body['password']);
    const confirm_password = generatePassword(req.body['confirm_password']);

    if (password != confirm_password) {
        response_msg.fail = true;
        response_msg.msg = "비밀번호가 일치하지 않습니다."
        return res.json(response_msg);
    }

    const query = `SELECT * FROM user WHERE user_id='${user_id}'`
    asyncFunction(query)
    .then( (result: any)=>{
        if(result.data[0]) {
            response_msg.fail = true;
            response_msg.msg = "이미 존재하는 계정입니다.";
            res.json(response_msg);

        } else {
            const query = `INSERT INTO user (user_id, password) VALUES ('${user_id}', '${password}')`;

            asyncFunction(query)
            .then( (result: any)=>{
                if(result.status){
                    response_msg.msg = '계정을 생성하였습니다.';
                    response_msg.data = result.data;
                    res.json(response_msg);
                } else {
                    response_msg.fail = true;
                    response_msg.msg = '계정 생성에 실패했습니다.';
                    res.json(response_msg);
                }
            })
        }
    });

    return response_msg
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

export const test = function (req: Request, res: Response) {
    console.log(req.user);
}