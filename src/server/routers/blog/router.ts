import { Router, json } from 'express';
import * as control from './control'

const router = Router();

router.get('/blog', json(), control.getBlogList);

export default router