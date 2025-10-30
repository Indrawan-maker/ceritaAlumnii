import User from '../models/userModel.js'
import { hashPassword, comparePassword } from '../services/hashService.js'
import { generateToken } from '../services/jwtServices.js'

export const register = async (req, res) => {
        const { fullname, nickname, email, password} = req.body
        
        console.log(`data received from frontend: 
            ${fullname}
            ${nickname}
            ${email}
            ${password}`)
                if(!fullname || !nickname || !email || !password) {
        return res.status(400).json({message: 'please complete the input'})
    }
    const hashedPassword = await hashPassword(password)
    console.log(hashedPassword)
    try {
        const newUser = await User.create({
                    fullname,
                    nickname,
                    email,
                    password : hashedPassword
                })
                return res.status(200).json({ message: 'berhasil login!', data: newUser})
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
    const comparedPassword = await comparePassword(password, user.password)

    if(!comparedPassword) {
        return res.status(401).json({message: 'wrong password'})
    }
    const token = jwt.sign(
        {id: user._id, nickname: user.nickname},
        process.env.JWT_SECRET,
        { expiresIn: '1d'}
    )

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