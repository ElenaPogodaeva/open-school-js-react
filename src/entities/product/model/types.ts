export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  warrantyInformation: string;
  shippingInformation: string;
  thumbnail: string;
  images: string[];
}

export interface ISearchQueryParams {
  q: string;
  limit: string;
  skip: string;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductsQueryParams {
  search: string;
  page: number;
}
