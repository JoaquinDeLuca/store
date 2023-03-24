import mongoose from 'mongoose';

const conn = {
    isConnected: false
}

const mongoUrl = process.env.MONGO_URL

export const connectDB = async () => {
    if(conn.isConnected) return;
    try{
        await mongoose.connect(mongoUrl!)
        console.log("___Connected to DB___");

    }catch(error){
        console.error(error)
    }
}
