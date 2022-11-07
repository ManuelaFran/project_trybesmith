import { Router } from 'express';
import LoginController from '../controller/login.controller';
import validateLogin from '../middlewares/validate.login';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validateLogin, loginController.login.bind(loginController));

export default loginRouter;
