/**
 * @file auth router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from 'express';

const router = Router();

router.get('/auth/login', (req, res)=>{
    return res.render('auth/login.njk');
});

router.get('/auth/signup', (req, res)=>{
    return res.render('auth/signup.njk');
});
router.post('/auth/signup', (req, res)=>{
    console.log(req.body);
});

export default router;