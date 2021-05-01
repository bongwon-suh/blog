import crypto from 'crypto';
import * as fs from 'fs';
import path from 'path';
import asyncFunction from './db';
// import { User } from './interface';

const SECRET = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'SECRET.json'), 'utf8'));
const sha_key = SECRET.SECURITY.SHAKEY;

export function generatePassword(user_pwd: string) {
    return crypto.createHmac('sha256', sha_key)
                 .update(user_pwd)
                 .digest('hex');
}

export function checkUser(user_id: string, user_pwd: string): Promise<any> {
    return new Promise( (resolve, reject)=>{
        const user_password = generatePassword(user_pwd);
        const query = `SELECT * FROM user WHERE user_id='${user_id}' AND password='${user_password}'`
        asyncFunction(query)
        .then( (result: any)=>{
            return result.data[0];
        })
        .then( (user)=>{
            if (!user) return reject(false);

            if (user.password === user_password) {
                return resolve(user);
            } else {
                reject(false);
            }
        })
        .catch( (err)=>{
            return reject(err);
        })
    });
}

export default { checkUser: checkUser }