import { Router } from 'express';

import posts from './posts';
import users from './users';

const router = Router();

router.use('/post', posts);
router.use('/user', users);

export default router;
