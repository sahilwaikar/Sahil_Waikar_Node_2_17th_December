import { Users } from "../models/userModel.js";
import { Posts } from "../models/postModel.js";
import { Comment } from "../models/commentModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const seceretKey = "dweretbrewfdqefgt632065789nbj";
export const loginUser = async (userData) => {

    try {
        const emailID = userData.email;
        const passwordByUser = userData.password;

        const userDocument = await Users.findOne({ email: emailID });
        if (!userDocument) {
            return ({ status: 'error', message: 'user does not exist' });
        }
        const hashedPassword = userDocument.password;
        const match = await bcrypt.compare(passwordByUser, hashedPassword);
        if (!match) {
            return ({ status: 'error', message: 'Password does not match ' });
        }
        const payloadForAccessToken = {
            name: userDocument.name,
            email: userDocument.email,
            age: userDocument.age,
            gender: userDocument.gender
        }
        const payloadForRefreshToken = {
            id: userDocument._id
        }
        const accessToken = jwt.sign(payloadForAccessToken, seceretKey, { expiresIn: '1h' });
        const refreshToken = jwt.sign(payloadForRefreshToken, seceretKey, { expiresIn: '24h' });
        return ({ status: 'success', data: { accessToken, refreshToken } })
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}

export const createUser = async (userData) => {
    try {
        let password = userData.password;
        let passwordToStoreInDb = await bcrypt.hash(password, 10);
        userData["password"] = passwordToStoreInDb;
        let createdUser = await Users.insertMany([userData]);
        return createdUser;
    } catch (err) {
        console.log("Error", err);
        throw err;
    }
}

export const createPost = async (postData) => {
    try {
        let createdPost = await Posts.insertMany([postData]);
        return createdPost;
    } catch (err) {
        console.log("Error", err);
        throw err;
    }
}

export const createComment = async (commentData) => {
    try {
        let createdComment = await Comment.insertMany([commentData]);
        return createdComment;
    } catch (err) {
        console.log("Error", err);
        throw err;
    }
}
export const getAllPost = async () => {
    try {
        let allPosts = await Posts.find({}); //TODO pagination
        return allPosts;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}
export const updatePost = async (id, data) => {
    try {
        let updatedPost = await Posts.updateOne({ _id: id }, { $set: data });
        return updatedPost;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}

export const deletePost = async (id) => {
    try {
        await Posts.deleteOne({ _id: id });
        return true;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}
export const getAllComment = async () => {
    try {
        let allComment = await Comment.find({}); //TODO pagination
        return allComment;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}
export const updateComment = async (id, data) => {
    try {
        let updatedComment = await Comment.updateOne({ _id: id }, { $set: data });
        return updatedComment;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}

export const deleteComment = async (id) => {
    try {
        await Comment.deleteOne({ _id: id });
        return true;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}

export const upvotePost = async (id) => {
    try {
        let upvotedPost = await Posts.updateOne({ _id: id }, { $inc: { like: 1 } });
        return upvotedPost;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}

export const downvotePost = async (id) => {
    try {
        let downvotedPost = await Posts.updateOne({ _id: id }, { $inc: { like: -1 } });
        return downvotedPost;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}
export const upvoteComment = async (id) => {
    try {
        let upvotedComment = await Comment.updateOne({ _id: id }, { $inc: { like: 1 } });
        return upvotedComment;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}
export const downvoteComment = async (id) => {
    try {
        let downvotedComment = await Comment.updateOne({ _id: id }, { $inc: { like: -1 } });
        return downvotedComment;
    } catch (err) {
        console.log("err", err);
        throw err;
    }
}