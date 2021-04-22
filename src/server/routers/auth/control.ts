import { Request, Response } from 'express'
import asyncFunction from '../../lib/db'

export const postSignup = function (req: Request, res: Response) {
    const response_msg = {
        "fail": false,
        "msg": ''
    };

    const user_id = req.body['user_id'];
    const password = req.body['password'];
    const confirm_password = req.body['confirm_password'];

    console.log()

    const query = `INSERT INTO user (user_id, user_pwd) VALUES ('${user_id}', ${password})`
    asyncFunction(query)
    .then( (result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })

    return res.json(response_msg)
}