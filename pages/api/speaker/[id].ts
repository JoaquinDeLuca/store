import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from '@database';
import Speaker from 'models/speaker';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, query: {id}, body} = req;

    switch (method) {
        case "GET":
            try{
                const speakerOne = await Speaker.findById(id)
                if (!speakerOne) return res.status(404).json("Speaker not found ")
                return res.status(200).json(speakerOne)

            }catch (error) {
                return (
                    res.status(500).json({
                        success: false,
                        msg: error
                    })
                )
            }
        case "PUT":
            try{
                const updateSpeaker = await Speaker.findByIdAndUpdate(id, body,{ new: true })
                if (!updateSpeaker) return res.status(404).json("Speaker not found ")
                return res.status(200).json(updateSpeaker)
            }catch(error){
                return res.status(400).json(error)
            }
        case "DELETE":
            try{
                const deleteSpeaker = await Speaker.findByIdAndDelete(id)
                if (!deleteSpeaker) return res.status(404).json("Speaker not found")
                return res.status(204);
            }catch (error) {
                return res.status(400).json(error)
            }
        default:
            return res.status(400).json({msg: "this method is not suppoted"})
    }
}

