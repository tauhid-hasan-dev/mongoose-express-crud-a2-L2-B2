import express from 'express';
import { userController } from './users.controller';

const router = express.Router();

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getAllUser);
router.get('/api/users/:userId', userController.getSingleUser);

export const userRoutes = router;