import User from '../models/userModel.js'
import { hashPassword, comparePassword } from '../services/hashService.js'
import { generateToken } from '../services/jwtServices.js'

export const register = async (req, res) => {
        const { fullname, nickname, email, password} = req.body

        if(!fullname || !nickname || !email || !password) {
return res.status(400).json({message: 'please complete the input'})
}
        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({message : `user ${existingUser} already exist`})
        }
        console.log(`data received from frontend: 
            ${fullname}
            ${nickname}
            ${email}
            ${password}`)
    const hashedPassword = await hashPassword(password)
    console.log(hashedPassword)

    try {
        const newUser = await User.create({
                    fullname,
                    nickname,
                    email,
                    password : hashedPassword
                })
                return res.status(200).json({ message: 'berhasil regist!', data: newUser})
    } catch (error) {
        return res.status(404).json({message: error})
    }
}

export const login = async (req, res) => {
    const { nickname, password } = req.body

    const user = await User.findOne({ nickname })
    if(!user) {
        return res.status(404).json({message: 'nick not found'})
    }
    
    const isMatch = await comparePassword(password, user.password)
    const token = generateToken({id: user._id, email: user.email})

    if(!isMatch) {
        return res.status(401).json({message: 'wrong password'})
    }

    console.log(user)
    res.json({
        message: 'login succesfull!',
        token,
        user: {
            fullname: user.fullname,
            nickname: user.nickname,
            email: user.email
        }
    })
}

export const profile = (req, res) => {
    console.log(req.user)
    res.json({ 
        message: "Welcome to your profile!",
        user: req.user
    })
}