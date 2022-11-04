import { IProducts } from '../interfaces';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  productsModel = new ProductsModel();

  async getAll() {
    const products = await this.productsModel.getAll();
    return { status: 200, products };
  }
  
  async create(products: IProducts) {
    const newProduct = await this.productsModel.create(products);

    return { status: 201, newProduct };
  }
}