export interface ICart {
  id: number;
  products: ICartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface ICartResponse {
  carts: ICart[];
  total: number;
}

export interface IProductUpdate {
  id: number;
  quantity: number;
}

export interface ICartUpdateRequest {
  merge: boolean;
  products: IProductUpdate[];
}

export interface IConfig {
  method: string;
  headers: {
    Authorization?: string;
    'Content-Type'?: string;
  };
  body?: string;
}
