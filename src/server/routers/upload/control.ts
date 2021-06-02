import { Request, Response } from 'express';
import { ImageFile } from '../../lib/interfaces';
import { File } from '../../models/File';

export const uploadFile = async function(req: Request, res: Response) {
    const file: ImageFile = req.file;

    if(!file.mimetype.includes("image")) {
        return res.status(500).json("이미지 파일이 아닙니다.");
    }

    try {
        const upload = new File();
        upload.destination = file.destination;
        upload.encoding = file.destination;
        upload.fieldname = file.fieldname;
        upload.filename = file.filename;
        upload.mimetype=file.mimetype
        upload.originalname=file.originalname
        upload.path=file.path
        upload.size=file.size

        await upload.save();
        res.status(200).json("등록을 완료했습니다.")
    }
    catch {
        return res.status(500).json("오류가 발생했습니다.");
    }
}