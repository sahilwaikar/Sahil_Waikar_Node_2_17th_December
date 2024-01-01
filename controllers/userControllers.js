import { createUser, loginUser, createPost, createComment, getAllPost, updatePost, deletePost, getAllComment, updateComment, deleteComment, upvotePost, downvotePost, upvoteComment, downvoteComment } from '../services/userService.js';

export const createUserHandler = async (req, res) => {
    let userData = req.body;
    try {
        let createdUser = await createUser(userData);
        res.send({ message: 'user created successfully', data: createdUser });
    }
    catch (err) {
        res.status(500).send({ message: 'user creation failed', err });
    }

}
export const loginUserHandler = async (req, res) => {
    try {
        const userData = req.body;
        const user = await loginUser(userData);
        if (user.status == "error") {
            res.status(401).send(user);
        }
        else {
            res.status(200).send(user);
        }
    }
    catch (err) {
        res.status(500).send({ message: 'Error while logging' });
    }
}

export const createPostHandler = async (req, res) => {
    let postData = req.body;
    try {
        let createdPost = await createPost(postData);
        res.send({ message: 'post created successfully', data: createdPost });
    }
    catch (err) {
        res.status(500).send({ message: 'post creation failed', err });
    }

}

export const showPostHandler = async (req, res) => {
    try {
        let allPost = await getAllPost();
        res.send({ message: 'users fetched successfully', data: allPost });
    } catch (err) {
        res.status(500).send({ message: 'user fetch failed.' });
    }
}

export const createCommentHandler = async (req, res) => {
    let commentData = req.body;
    try {
        let createdComment = await createComment(commentData);
        res.send({ message: 'Comment created successfully', data: createdComment });
    }
    catch (err) {
        res.status(500).send({ message: 'comment creation failed', err });
    }

}
export const updatePostHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let updatedPost = await updatePost(id, data);
        res.send({ message: 'user updated successfully', data: updatedPost });
    } catch (err) {
        res.status(500).send({ message: 'user update failed.' });
    }
}

export const deletePostHandler = async (req, res) => {
    try {
        let id = req.params.id;
        await deletePost(id);
        res.send({ message: 'user deleted successfully' });
    } catch (err) {
        res.status(500).send({ message: 'user deletion failed.' });
    }
}

export const showCommentHandler = async (req, res) => {
    try {
        let allComment = await getAllComment();
        res.send({ message: 'users fetched successfully', data: allComment });
    } catch (err) {
        res.status(500).send({ message: 'user fetch failed.' });
    }
}
export const updateCommentHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let updatedComment = await updateComment(id, data);
        res.send({ message: 'user updated successfully', data: updatedComment });
    } catch (err) {
        res.status(500).send({ message: 'user update failed.' });
    }
}

export const deleteCommentHandler = async (req, res) => {
    try {
        let id = req.params.id;
        await deleteComment(id);
        res.send({ message: 'user deleted successfully' });
    } catch (err) {
        res.status(500).send({ message: 'user deletion failed.' });
    }
}

export const upVotePostHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let upvotedPost = await upvotePost(id);
        res.send({ message: 'user updated successfully', data: upvotedPost });
    } catch (err) {
        res.status(500).send({ message: 'user update failed.' });
    }
}

export const downVotePostHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let downvotedPost = await downvotePost(id);
        res.send({ message: 'user updated successfully', data: downvotedPost });
    } catch (err) {
        res.status(500).send({ message: 'user update failed.' });
    }
}

export const upVoteCommentHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let upvotedComment = await upvoteComment(id);
        res.send({ message: 'user updated successfully', data: upvotedComment });
    } catch (err) {
        res.status(500).send({ message: 'user update failed.' });
    }
}

export const downVoteCommentHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let downvotedComment = await downvoteComment(id);
        res.send({ message: 'user updated successfully', data: downvotedComment });
    } catch (err) {
        res.status(500).send({ message: 'user update failed.' });
    }
}