import express from 'express';
import { UserController } from '../controllers/usersController';
import { catchAsync } from '../middleware';

const router = express.Router();
const userController = new UserController();

router.get('/', catchAsync(userController.getAllUsers.bind(userController)));
router.get('/:id', catchAsync(userController.getUserWithAppointments.bind(userController)));
router.post('/register', catchAsync(userController.registerUser.bind(userController)));
router.post('/login', catchAsync(userController.loginUser.bind(userController)));

export default router;
