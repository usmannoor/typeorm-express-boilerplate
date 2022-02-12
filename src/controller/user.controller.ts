import { Request, Response } from "express";
import { getManager } from 'typeorm';
import { User } from '../entity/User';

/**
 * Get all users
 */
export async function getAllUsers(request: Request, response: Response) {
    // get a user repository to perform operations with user
    const userRepository = getManager().getRepository(User);

    const users = await userRepository.find({relations: ['posts']});
    response.send(users);
}

/**
 * Loads user by a given id.
 */
export async function getUserById(request: Request, response: Response) {
    try {
        // get a user repository to perform operations with user
        const userRepository = getManager().getRepository(User);
        const {id} = request.params;

        // get user by id
        const user = await userRepository.findOne(id, {relations: ['posts']});
        // if user was not found return 404 to the client
        if (!user) {
            response.status(404);
            response.end();
            return;
        }

        response.send(user);
    } catch ( e ) {
        response.status(400);
        response.end();
    }
}

/**
 * Saves User
 */
export async function saveUser(request: Request, response: Response) {
    try {
        // get a user repository to perform operations with user
        const userRepository = getManager().getRepository(User);

        // create user
        const newUser = userRepository.create({
            ...request.body
        });
        await userRepository.save(newUser);

        response.send(newUser);
    } catch ( e ) {
        response.status(400);
        response.end();
    }
}
