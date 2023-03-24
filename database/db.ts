import mongoose from 'mongoose';

let conn = {
    isConnected: false
}

const mongoUrl = process.env.MONGO_URL

export const connectDB = async () => {
    if(conn.isConnected) return;
    try{
        await mongoose.connect(mongoUrl!)
        if(mongoose.connections[0].readyState === 1) conn.isConnected = true;
        console.log("___Connected to DB___");
        
    }catch(error){
        console.error(error)
    }
}
