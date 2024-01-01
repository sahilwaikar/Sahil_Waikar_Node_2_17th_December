import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,

    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }
});

const Posts = mongoose.model('posts', postSchema);
export { Posts };