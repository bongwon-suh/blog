import crypto from 'crypto';
import * as fs from 'fs';
import path from 'path'

const SECRET = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'SECRET.json'), 'utf8'));
const sha_key = SECRET.SECURITY.SHAKEY;

export function generatePassword(user_pwd: string) {
    return crypto.createHmac('sha256', sha_key)
                 .update(user_pwd)
                 .digest('hex');
}