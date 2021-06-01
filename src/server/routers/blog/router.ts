import { Router, json } from 'express';
import * as control from './control'

const router = Router();

router.get('/blog', json(), control.getBlogList);
router.get('/blog/:id', json(), control.getBlogDetail);

export default router