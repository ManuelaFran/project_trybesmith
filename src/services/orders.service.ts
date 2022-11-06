import OrdersModel from '../models/orders.model';

export default class OrdersService {
  ordersModel = new OrdersModel();

  async getAll() {
    const orders = await this.ordersModel.getAll();
    return { status: 200, orders };
  }
}