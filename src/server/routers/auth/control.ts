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

    const query = `INSERT INTO user (user_id, user_pwd) VALUES (${user_id}, ${password})`
    asyncFunction(query)
    .then( (result: any)=>{
        if (result.status) {
            response_msg.msg = '계정을 생성하였습니다.';
            response_msg.data = result.data;
            res.json(response_msg);
        } else {
            response_msg.fail = true;
            response_msg.msg = '계정 생성에 실패했습니다.';
            res.json(response_msg);
        }
    })

    return response_msg
}