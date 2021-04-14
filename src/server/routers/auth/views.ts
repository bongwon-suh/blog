import { Request, Response } from 'express';

export const getSignup = function(req: Request, res: Response) {
    return res.render('auth/signup.njk');
}