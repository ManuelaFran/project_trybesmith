import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, IProductsId } from '../interfaces';

export default class ProductsModel {
  connection = connection;
  
  async getAll(): Promise<IProductsId[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);

    return products as IProductsId[];
  }
  
  async create(products: IProducts): Promise<IProductsId> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [products.name, products.amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newProduct: IProductsId = { id, ...products };
    return newProduct;
  }
}