import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import { connectDB } from "./db/dbConnection.js"
import User from './models/userModel.js'

dotenv.config()
const app = express()


app.use(cors())
app.use(express.json())
connectDB()

app.post("/register", async (req, res) => {
    const { fullname, nickname, email, password} = req.body

    if(!fullname || !nickname || !email || !password) {
        return res.status(400).json({message: 'please complete the input'})
    }

    try {
        const newUser = new User({
            fullname,
            nickname,
            email,
            password
        })
        await newUser.save()
        return res.status(200).json({ message: 'data saved succesfully'})
    } catch (error) {
        return res.status(404).json({message: error})
    }

    console.log(`data received from frontend: 
        ${fullname}
        ${nickname}
        ${email}
        ${password}
        `)

    res.status(201).json({message: "registrasi berhasil happy coding"})
})

app.get("/login", (req, res) => {
    res.json({message: "hello from server"})
})

app.listen(process.env.PORT, () => console.log(`Server running on PORT ${process.env.PORT || 5174}`))