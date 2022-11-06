import { Router } from 'express';
import OrdersController from '../controller/orders.controller';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.getAll.bind(ordersController));

export default ordersRouter;