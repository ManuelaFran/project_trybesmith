export interface IProducts {
  name: string,
  amount: string,
}

export interface IProductsId extends IProducts{
  id: number,
  orderId?: number,
}

export interface UserCredentials {
  username: string,
  password: string,
}

export interface IUser extends UserCredentials {
  classe: string,
  level: number,
}

export interface UserId extends IUser {
  id: number,
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number,
}
