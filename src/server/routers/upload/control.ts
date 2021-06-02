import { Request, response, Response } from 'express';
import { User } from '../../models/User';
import { ResUser } from '../../lib/interfaces'
import { Project } from '../../models/Project';

export const uploadFile = async function(req: Request, res: Response) {
    console.log(req.body);
    console.log(req.files);
}