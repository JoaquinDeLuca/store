import { NextApiRequest, NextApiResponse } from "next";
import {verify} from 'jsonwebtoken';
import {serialize} from 'cookie'


export default async function logout(req:NextApiRequest ,res: NextApiResponse) {
    
    const {UserToken} = req.cookies;

    if(!UserToken) return res.status(401).json("Not token");

    try {
        await verify(UserToken!, process.env.JWT_SECRET!)
        const serialized = await serialize("UserToken", null! ,{
            httpOnly: true,
            secure: false, 
            sameSite: "none",
            maxAge: 0,
            path: "/login"
        });

        return res.status(200).setHeader("Set-Cookie", serialized).json("Logout successfull");
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: "Invalid token"})
    }
    

}