import {connectDB} from 'database/db';
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from 'bcryptjs'
import User from 'models/user';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

connectDB();


export default async function login( req: NextApiRequest, res: NextApiResponse) {

    const { method, body } = req
    const {mail, password} = body

    switch (method) {
        case "POST":
            try {
                const findUser:IUSER | null = await User.findOne({mail})
                if(!findUser) return res.status(404).json("This email does not exist");

                const passwordIsCorrect = await compare(password, findUser.password);

                if(!passwordIsCorrect) return res.status(400).json("Invalid the password");

                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    _id: findUser._id,
                    fullName: findUser.name + " " + findUser.lastName,
                    mail: findUser.mail,
                    photo: findUser.photo,
                    logged: findUser.logged
                },process.env.JWT_SECRET!)


                const serialized = serialize("UserToken", token,{
                    httpOnly: true,
                    secure: false, // ssl the http
                    sameSite: "none",
                    maxAge: Math.floor(Date.now() / 1000) + (60 * 60),
                    path: "/login"
                });

                return res.status(200).setHeader("Set-Cookie", serialized).json("login successfully");

            } catch (error) {
                console.log(error);
                return res.status(400).json({error});
            }    
        default:
            return res.status(400).json("this method is not supported")
    }

}
