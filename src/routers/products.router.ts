import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', productsController.create.bind(productsController));

export default productsRouter;