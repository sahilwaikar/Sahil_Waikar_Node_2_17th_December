import express from 'express';
import { createUserHandler, loginUserHandler, createPostHandler, createCommentHandler, showPostHandler, updatePostHandler, deletePostHandler, showCommentHandler, updateCommentHandler, deleteCommentHandler, upVotePostHandler, downVotePostHandler, upVoteCommentHandler, downVoteCommentHandler } from './controllers/userControllers.js';
// import { authenticate } from './authenticate.js';

const router = express.Router();
//Signup and login
router.post('/createUser', createUserHandler);
router.post('/loginUser', loginUserHandler);
//Post CRUD operations

router.post('/createPost', createPostHandler);
router.get('/showPost', showPostHandler);
router.put('/updateUser/:id', updatePostHandler);
router.delete('/deleteUser/:id', deletePostHandler);
// router.post('/deletePost',deletePostHandler);

//Comment CRUD operation
router.post('/createComment', createCommentHandler);
router.get('/showComment', showCommentHandler);
router.put('/updateComment/:id', updateCommentHandler);
router.delete('/deleteComment/:id', deleteCommentHandler);

// upvote and downvote for post and comment 
router.put('/upvotepost/:id', upVotePostHandler);
router.put('/downvotepost/:id', downVotePostHandler);

router.put('/upvotecomment/:id', upVoteCommentHandler);
router.put('/downvotecomment/:id', downVoteCommentHandler);



export { router as routes };
