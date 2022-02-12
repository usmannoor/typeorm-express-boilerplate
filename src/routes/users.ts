import { Router } from 'express';
import { getAllUsers, getUserById, saveUser } from '../controller/user.controller';

const router = Router();

router
    .get('/', getAllUsers)
    .get('/:id', getUserById)
    .post('/', saveUser);

export default router;
