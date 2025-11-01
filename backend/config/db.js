import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('connect db succesfull')
    } catch (error) {
        console.log(error)
    }
}