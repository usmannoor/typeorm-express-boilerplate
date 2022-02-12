import { Router } from 'express';
import { getAllPosts, getPostById, getPostByUserId, savePost } from '../controller/post.controller';

const router = Router();

router
    .get('/', getAllPosts)
    .get('/user/:userId', getPostByUserId)
    .get('/:id', getPostById)
    .post('/:userId', savePost);

export default router;
