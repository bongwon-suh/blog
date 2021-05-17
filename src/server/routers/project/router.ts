import { Router, json } from 'express';
import * as control from './control'

const router = Router();

router.post('/project', json(), control.createProject);

export default router