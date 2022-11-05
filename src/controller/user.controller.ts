import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async create(req: Request, res: Response) {
    const user = req.body as IUser;
    const { status, data, error } = await this.userService.create(user);

    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
}