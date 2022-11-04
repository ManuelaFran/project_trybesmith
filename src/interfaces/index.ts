export interface IProducts {
  name: string,
  amount: string,
}

export interface IProductsId extends IProducts{
  id: number,
}