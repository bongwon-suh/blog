import { Router, json } from 'express';
import * as control from './control';
import { upload } from '../../lib/upload';

const router = Router();

router.post('/upload', upload.single('img'), control.uploadFile)
router.get('/upload/imagelist', json(), control.getImageList)

export default router