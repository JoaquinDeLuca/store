import {connectDB} from 'database/db';
import { NextApiRequest, NextApiResponse } from "next";
import User from 'models/user'
import { hash } from 'bcryptjs'


connectDB();

export default async function userController(req: NextApiRequest, res : NextApiResponse) {

    const {method, body } = req;
    const { mail, password, photo, logged, name, lastName } = body;

    switch (method) {
        case "GET":
            try{

                const users = await User.find()
                return res.status(200).json(users)

            }catch(error){
                console.log(error)
                return res.status(400).json({error})
            }
        case "POST":

            if (await User.findOne({mail})){
                return res.status(400).json("This email is already associated with a created user");
            }
            if(password.length < 6) return res.status(400).json("Password must be longer than 6 characters");

            try{

                const hashPassword = await hash(password, 12) 

                await User.create({
                    name,
                    lastName,
                    photo, 
                    mail,
                    password: hashPassword,
                    logged
                })

                return res.status(201).json({ success: true, msg: "user created successfully"});
                
            }catch(error){
                console.log(error);
                return res.status(400).json({error});
            }
        // case "DELETE":
        //     try{
        //         const userDelete = await User.findByIdAndDelete(id)
        //         if(!userDelete) return res.status(404).json("User not found");
        //         return res.status(200).json("User delete");

        //     }catch(error){
        //         console.log(error)
        //         return res.status(400).json({error});
        //     }
        default:
            return res.status(400).json("this method is not supported")
    }
}