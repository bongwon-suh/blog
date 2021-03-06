/**
 * @file auth router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */
 import { Request, Response } from 'express'
import { Router, json } from 'express';
import * as control from './control'

const router = Router();

router.get('/auth/user-info', json(), control.getUser)

router.post('/auth/signup', json(), control.signup);
router.post('/auth/login', json(), control.login);

router.post('/auth/test', json(), control.test);

export default router;