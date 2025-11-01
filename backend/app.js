import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messagesRoutes.js'
import 'dotenv/config'



const app = express()

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())
connectDB()

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

export default app