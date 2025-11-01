import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
    message: String,
    title: String,
    nickname: String,
    likes: {type : Number, default: 0},
    shares: {type : Number, default: 0},
    comment: {type: Number, default: 0}
},{ timestamps: true }
)

const Messages = model('Messages', messageSchema)

export default Messages