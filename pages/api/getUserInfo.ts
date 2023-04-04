import { NextApiRequest, NextApiResponse } from "next";
import { verify } from 'jsonwebtoken';

export default async function getUserInfo(req: NextApiRequest, res: NextApiResponse) {

    const { UserToken } = req.cookies;
    if(!UserToken) return res.status(401).json("Not token");

    try {
        const user = await verify(UserToken!, process.env.JWT_SECRET!)

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: "Invalid token"});
    }
}
