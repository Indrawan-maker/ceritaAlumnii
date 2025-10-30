import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true }
        )
        console.log('connect db succesfull')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}