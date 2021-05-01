/**
 * @file auth router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */
 import { Request, Response } from 'express'
import { Router, json } from 'express';
import * as control from './control'

const router = Router();

router.post('/auth/signup', json(), control.postSignup);
router.post('/auth/login', json(), control.postLogin);

router.post('/auth/test', json(), control.test);

export default router;