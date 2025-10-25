import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    fullname: String,
    nickname: String,
    email: String,
    password: String
},{
    timestamps: true
}
)

const Users = model('Users', userSchema)

export default Users