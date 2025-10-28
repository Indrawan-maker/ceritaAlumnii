import express from "express"
import cors from "cors"
import 'dotenv/config'
import { connectDB } from "./db/dbConnection.js"
import User from './models/userModel.js'
import Messages from './models/messageModel.js'
import bcrypt from 'bcrypt'


const app = express()

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())
connectDB()


app.post("/api/register", async (req, res) => {
    const { fullname, nickname, email, password} = req.body

    const saltRound = 12
    const hashPasword = await bcrypt.hash(password, saltRound)

    
        console.log(`data received from frontend: 
            ${fullname}
            ${nickname}
            ${email}
            ${password}
            `)
    if(!fullname || !nickname || !email || !password) {
        return res.status(400).json({message: 'please complete the input'})
    }

    try {
        const newUser = await User.create({
            fullname,
            nickname,
            email,
            password : hashPasword
        })
        return res.status(200).json({ message: 'berhasil login!', data: newUser})
    } catch (error) {
        return res.status(404).json({message: error})
    }
})

app.post('/api/login', async (req, res) => {
    const { nickname, password } = req.body

    const user = await User.findOne({ nickname })
    if(!user) {
        return res.status(404).json({message: 'nick not found'})
    }
    const Compare = await bcrypt.compare(password, user.password)

    if(!Compare) {
        return res.status(401).json({message: 'wrong password'})
    }

    console.log(user)
    res.json({
        message: 'login succesfull!',
        userId: user._id,
        user: {
            fullname: user.fullname,
            nickname: user.nickname,
            email: user.email
        }
    })
})


app.post('/api/messages', async (req, res) => {
    const { message, title, nickname } = req.body
    try {
        const Mess = await Messages.create({
            message,
            title,
            nickname
        })
        console.log(message, title, nickname)
        console.log(Mess)
        return res.status(200).json(Mess)
    } catch (error) {
        console.log(error)
        return res.status(401).json({Messages: 'message not normal'})
    }
})

app.get('/api/messages', async (req, res) => {
    try {
        
        const getAllMessage = await Messages.find().sort({ createdAt: -1 }).limit(5)
        return res.status(200).json(getAllMessage)
    } catch (error) {
        return res.status(404).json({Message: 'get message fail'})
    }
})

app.get('/api/messages', async (req, res) => {
    try {
        const skip = parseInt(req.query.skip) || 0
        console.log(skip)
        const limit = 5
        const getAllMessage = await Messages
        .find()
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit)
        return res.status(200).json(getAllMessage)
    } catch (error) {
        return res.status(404).json({Message: 'get message fail'})
    }
})



app.listen(process.env.PORT, () => console.log(`Server running on PORT ${process.env.PORT}`))