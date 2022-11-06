import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  ordersService = new OrdersService();

  async getAll(_req: Request, res: Response) {
    const { status, orders } = await this.ordersService.getAll();
    res.status(status).json(orders);
  }
}