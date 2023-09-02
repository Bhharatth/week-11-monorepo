import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";
import dbConnect from '../dbConnect';
import { getUser } from '../middleware';
// import dbConnect from '@/lib/db';
// import { getUser } from '@/lib/middleware';
import { Admin, Course, User } from 'db';

type Data = {
    email: string,
    password: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await dbConnect();
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        getUser(token, (userId:string) => {
            if (!userId) {
                res.status(403).json({});
                return
            }
            res.json({ user: userId })
        });
    }
}