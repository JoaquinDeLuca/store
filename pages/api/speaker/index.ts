import { NextApiRequest, NextApiResponse } from "next";
import {connectDB} from '@database'
import Speaker from 'models/speaker';


connectDB();

export default async  function allProducts (req: NextApiRequest, res :NextApiResponse) {

    const {method, body } = req
    
    switch (method) {
        case "GET":
            try{
                const listSpeaker = await Speaker.find();
                return res.status(200).json(listSpeaker)
            }catch(error){
                return  (
                    res.status(400).json({msg: "could not get the products", success: false})
                )
            }
        case "POST":
            try{
                const newSpeaker = await new Speaker(body).save()

                return res.status(201).json(newSpeaker)
            }catch(error){
                return (
                    console.log(error),
                    res.status(400).json({
                        msg: "could not created the product",
                        success: false,
                        error: error
                    })
                )
            }
        default:
            return res.status(400).json({msg: "this method is not supported "})
    }
}