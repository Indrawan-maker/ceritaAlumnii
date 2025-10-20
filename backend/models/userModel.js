import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: String,
    nickname: String,
    email: String,
    password: String
})

export default mongoose.model('User', userSchema)