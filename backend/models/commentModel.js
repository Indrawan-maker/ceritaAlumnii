import mongoose from 'mongoose'
const { Schema, model } = mongoose

const commentSchema = new Schema({
    postId: {type: Schema.Types.ObjectId, ref: 'Messages', required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    text: {type: String , required: true},
},
{timestamps: true}
)

const Comment = model('Comment', commentSchema)

export default Comment