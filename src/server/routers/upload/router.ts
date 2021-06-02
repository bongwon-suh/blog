import { Router, json } from 'express';
import * as control from './control';
import { upload } from '../../lib/upload';

const router = Router();

router.post('/upload', upload.single('img'), control.uploadFile)

export default router