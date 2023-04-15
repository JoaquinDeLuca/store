import { NextApiRequest, NextApiResponse } from "next";
import { JwtPayload, verify } from 'jsonwebtoken';
import {connectDB} from 'database/db';

connectDB();

export default async function getUserInfo(req: NextApiRequest, res: NextApiResponse) {

    const { UserToken } = req.cookies;
    if(!UserToken) return res.status(401).json("Not token");

    try {
        const tokenVerify = await verify(UserToken!, process.env.JWT_SECRET!) as JwtPayload

        const userInfo: userCredentials = {
            fullName: tokenVerify.fullName,
            photo: tokenVerify.photo,
            logged: tokenVerify.logged
        }

        return res.status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: "Invalid token"});
    }
}
