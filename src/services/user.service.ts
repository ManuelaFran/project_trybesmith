import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import UserModel from '../models/user.model';

export default class UserService {
  userModel = new UserModel();

  async create(user: IUser) {
    const userExists = await this.userModel.getByUsername(user.username);
    if (userExists) {
      return { status: 401, error: { message: 'User already exists' } };
    }

    const payload = await this.userModel.create(user);
    const token = jwt.sign({ payload }, process.env.JWT_SECRET as string);
    const data = { token, ...payload };
    return { status: 201, data };
  }
}