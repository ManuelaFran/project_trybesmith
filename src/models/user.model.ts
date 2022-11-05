import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, UserId } from '../interfaces';

export default class UserModel {
  connection = connection;

  async getByUsername(username: string): Promise<UserId | null> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
    const values = [username];
    
    const [data] = await this.connection.execute(query, values);
    const [user] = data as UserId[];

    return user || null;
  }

  async create(user: IUser): Promise<UserId> {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
    
    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newUser: UserId = { id, username, classe, level, password };
    return newUser;
  }
}