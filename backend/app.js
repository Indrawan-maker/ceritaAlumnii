import express from "express"
import cors from "cors"
import 'dotenv/config'
import { connectDB } from "./db/dbConnection.js"
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messagesRoutes.js'



const app = express()

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())
connectDB()

app.use('/api/auth', authRoutes)
app.use('/api/messages')