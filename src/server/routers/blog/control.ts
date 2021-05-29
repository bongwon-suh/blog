import { Request, response, Response } from 'express';
import { User } from '../../models/User';
import { ResUser } from '../../lib/interfaces'
import { Blog } from '../../models/Blog';

export const getBlogList = async function(req: Request, res: Response) {
    try {
        const list = await Blog.find();
        return res.status(200).json(list);
    }
    catch {
        return res.status(500).json("목록을 받아 올 수 없습니다.");
    }
}