import { Router, json } from 'express';
import * as control from './control';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/upload', upload.single('img'), control.uploadFile);

export default router