import { Request, response, Response } from 'express';
import { User } from '../../models/User';
import { ResUser } from '../../lib/interfaces'
import { Project } from '../../models/Project';

export const createProject = async function(req: Request, res: Response) {
    const title = req.body['title'];
    const content = req.body['content'];
    const res_user = req.user as ResUser
    
    try {
        const user = await User.findOne({id: res_user.id})
        if (!user) {
            return res.status(409).json("로그인이 필요한 작업입니다.")
        }

        const project = new Project();
        project.title = title;
        project.content = content;
        project.author = user
        await project.save();

        res.status(200).json("등록을 완료했습니다.")
    }
    catch (err){
        return res.status(500).json("오류가 발생했습니다.");
    }
}

export const getProjectList = async function(req: Request, res: Response) {
    try {
        const list = await Project.find();
        return res.status(200).json(list);
    }
    catch {
        return res.status(500).json("목록을 받아 올 수 없습니다.");
    }
}