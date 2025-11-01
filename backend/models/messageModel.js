import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
    message: String,
    title: String,
    nickname: String,
    like: String,
    comment: String
},{ timestamps: true }
)

const Messages = model('Messages', messageSchema)

export default Messages