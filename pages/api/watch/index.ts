import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'

const allWatch = async (req: NextApiRequest, res: NextApiResponse) => {

    const db = new DB();
    const products = await db.getAll();


    res.status(200).json({
        data: products,
        length: products.length
    })
}

export default allWatch;