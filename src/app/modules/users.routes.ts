import express from 'express';
import { userController } from './users.controller';

const router = express.Router();

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getAllUser);
router.get('/api/users/:userId', userController.getSingleUser);
router.put('/api/users/:userId', userController.updateUser);
router.delete('/api/users/:userId', userController.deleteUser);

router.put('/api/users/:userId/orders', userController.addProductIntoOrder);

export const userRoutes = router;
