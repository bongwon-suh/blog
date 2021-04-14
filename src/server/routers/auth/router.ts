/**
 * @file auth router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from 'express';
import * as control from './control'
import * as views from './views'

const router = Router();

router.get('/auth/signup', views.getSignup);

router.post('/auth/signup', control.signup)

export default router;