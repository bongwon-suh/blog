/**
 * @file auth router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */
 import { Request, Response } from 'express'
import { Router, json } from 'express';
import * as control from './control'
import * as views from './views'

const router = Router();

router.get('/auth/signup', views.getSignup);
router.post('/auth/signup', json(), control.postSignup);

export default router;