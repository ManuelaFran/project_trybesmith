import { Router } from 'express';
import UserController from '../controller/user.controller';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/', userController.create.bind(userController));

export default usersRouter;
