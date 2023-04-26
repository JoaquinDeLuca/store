import { NextApiRequest, NextApiResponse } from "next";
import {verify} from 'jsonwebtoken';
import {serialize} from 'cookie'
import User from "models/user";


export default async function logout(req:NextApiRequest ,res: NextApiResponse) {
    
    const {UserToken} = req.cookies;
    const _id = req.body;

    if(!UserToken) return res.status(401).json("Not token");
    if(!_id) return res.status(401).json("Not id user");

    try {
        const userId = await User.findById(_id)

        userId.logged = false 
        await userId.save();

        await verify(UserToken!, process.env.JWT_SECRET!)
        const serialized = await serialize("UserToken", null! ,{
            httpOnly: true,
            secure: true, 
            sameSite: "strict",
            maxAge: 0,
            path: "/"
        });

        return res.status(200).setHeader("Set-Cookie", serialized).json("Logout successfull");
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: "Invalid token"})
    }
    

}