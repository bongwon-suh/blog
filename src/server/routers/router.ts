/**
 * @file project router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from 'express';

import authRouter from './auth/router';
import projectRouter from './project/router'

const router = Router();

router.use(authRouter);
router.use(projectRouter);

export default router;