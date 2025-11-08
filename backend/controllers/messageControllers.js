import Messages from '../models/messageModel.js'
import { io } from "../socket.js"

export const createMessage = async (req, res) => {
    const { message, title, nickname } = req.body
    try {
        const Mess = await Messages.create({
            message,
            title,
            nickname
        })
        console.log(message, title, nickname)
        console.log(Mess)
        io.emit("new-message", Mess)
        return res.status(200).json(Mess)
    } catch (error) {
        console.log(error)
        return res.status(500).json({Messages: '/api/messages'})
    }
}

export const getMessage = async (req, res) => {
    const skip = parseInt(req.query.skip) || 0
    console.log(skip)
    const limit = 5
    
        try {
        const getAllMessage = await Messages
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        return res.status(200).json(getAllMessage)
    } catch (error) {
        return res.status(404).json({Message: 'get message fail'})
    }
}
