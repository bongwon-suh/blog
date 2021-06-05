import { Router, json } from 'express';
import * as control from './control'

const router = Router();

router.post('/project', json(), control.createProject);

router.get('/project', json(), control.getProjectList);
router.get('/project/:id', json(), control.getProjectDetail);

export default router