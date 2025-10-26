import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
    nickname: String,
    main_message: String,
    like: String,
    comment: String
},{
    timestamps: true
}
)

const Messages = model('Messages', messageSchema)

export default Messages