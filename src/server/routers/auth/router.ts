/**
 * @file auth router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from 'express';

const router = Router();

router.get('/auth/login', (req, res)=>{
    return res.render('auth/login.njk');
});

export default router;