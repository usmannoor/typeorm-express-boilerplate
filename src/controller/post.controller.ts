import { Request, Response } from "express";
import { getManager } from 'typeorm';
import { Post } from "../entity/Post";
import { User } from '../entity/User';

/**
 * Loads all posts from the database.
 */
export async function getAllPosts(request: Request, response: Response) {
    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load all posts
    const posts = await postRepository.find( {relations: ['user']});

    // return loaded posts
    response.send(posts);
}

/**
 * Loads post by a given id.
 */
export async function getPostById(request: Request, response: Response) {
    try {
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Post);
        const { id } = request.params;

        // load a post by a given post id
        const post = await postRepository.findOne(id, { relations: ['user'] });

        // if post was not found return 404 to the client
        if (!post) {
            response.status(404);
            response.end();
            return;
        }

        response.send(post);
    } catch ( e ) {
        response.status(400);
        response.end();
    }
}

/**
 * Loads post by user id.
 */
export async function getPostByUserId(request: Request, response: Response) {
    try {
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Post);
        const { userId } = request.params;

        // load a post by a given post id
        const post = await postRepository.find({
            relations: ['user'],
            where: {
                userId
            }
        });

        // if post was not found return 404 to the client
        if (!post.length) {
            response.status(404);
            response.end();
            return;
        }

        response.send(post);
    } catch ( e ) {
        response.status(400);
        response.end();
    }
}

/**
 * Saves given post.
 */
export async function savePost(request: Request, response: Response) {
    try {
        // check if user exists
        const {userId: id} = request.params;
        const userRepository = getManager().getRepository(User);   // get a user repository to perform operations with user
        const postRepository = getManager().getRepository(Post);  // get a post repository to perform operations with post
        const user = await userRepository.findOne(id);

        if(!user) {
            response.status(404);
            response.send('User not exists');
            return;
        }

        // create post
        const newPost = postRepository.create({
            ...request.body,
            userId: user.id
        });
        await postRepository.save(newPost);

        response.send(newPost);
    } catch ( e ) {
        response.status(400);
        response.end();
    }
}
