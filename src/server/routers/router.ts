/**
 * @file project router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from 'express';

import authRouter from './auth/router';
import projectRouter from './project/router';
import blogRouter from './blog/router';
import uploadRouter from './upload/router';
const router = Router();

router.use(authRouter);
router.use(projectRouter);
router.use(blogRouter);
router.use(uploadRouter);

export default router;