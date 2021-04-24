import { Request, Response } from 'express'
import asyncFunction from '../../lib/db'

interface ControlResult{
    "fail": boolean;
    "msg"?: string;
    "data"?: any;
}

export const postSignup = function (req: Request, res: Response) {
    const response_msg: ControlResult = {
        "fail": false,
        "msg": ''
    };

    const user_id = req.body['user_id'];
    const password = req.body['password'];
    const confirm_password = req.body['confirm_password'];

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
            const query = `INSERT INTO user (user_id, user_pwd) VALUES ('${user_id}', ${password})`;

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