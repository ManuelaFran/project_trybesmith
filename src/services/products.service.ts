import { IProducts } from '../interfaces';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  productsModel = new ProductsModel();

  async create(products: IProducts) {
    const newProduct = await this.productsModel.create(products);

    return { status: 201, newProduct };
  }
}