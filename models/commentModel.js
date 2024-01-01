import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    comment_id: {
        type: String,
        required: true,
        unique: true
    },
    comment: {
        type: String
    },
    author: {
        type: String
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

const Comment = mongoose.model('comments', commentSchema);
export { Comment };