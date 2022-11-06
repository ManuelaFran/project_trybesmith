import connection from './connection';
import { IOrder } from '../interfaces';

export default class OrdersModel {
  connection = connection;

  async getAll(): Promise<IOrder[]> {
    const query = `
    SELECT o.id, o.userId, json_arrayagg(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id
    `;
    const [orders] = await this.connection.execute(query);

    return orders as IOrder[];
  }
}