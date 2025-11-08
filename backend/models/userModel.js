import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    fullname: { type: String, required: true},
    nickname: { type: String, unique: true, required: true},
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true},
    profileImage: {
        data: Buffer,
        contentType: String
    }
},{
    timestamps: true
}
)

const Users = model('Users', userSchema)

export default Users