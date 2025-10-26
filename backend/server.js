import express from "express"
import cors from "cors"
import 'dotenv/config'
import { connectDB } from "./db/dbConnection.js"
import User from './models/userModel.js'


const app = express()

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())
connectDB()

app.post("/api/register", async (req, res) => {
    const { fullname, nickname, email, password} = req.body

    
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
            password
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

    if(user.password !== password) {
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



app.listen(process.env.PORT, () => console.log(`Server running on PORT ${process.env.PORT || 5174}`))