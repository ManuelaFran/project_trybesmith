import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.get('/', productsController.getAll.bind(productsController));
productsRouter.post('/', productsController.create.bind(productsController));

export default productsRouter;