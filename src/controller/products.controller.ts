import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import { IProducts } from '../interfaces';

export default class ProductsController {
  productsService = new ProductsService();

  async getAll(_req: Request, res: Response) {
    const { status, products } = await this.productsService.getAll();
    res.status(status).json(products);
  }
  
  async create(req: Request, res: Response) {
    const products = req.body as IProducts;
    const { status, newProduct } = await this.productsService.create(products);
    res.status(status).json(newProduct); 
  }
}