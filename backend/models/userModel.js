import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    fullname: String,
    nickname: { type: String, unique: true},
    email: { type: String, unique: true},
    password: String
},{
    timestamps: true
}
)

const Users = model('Users', userSchema)

export default Users