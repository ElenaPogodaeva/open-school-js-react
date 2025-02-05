import {
  ICart,
  ICartResponse,
  ICartUpdateRequest,
  IConfig,
  IProductUpdate,
} from '@/entities/cart/model/types';
import { BASE_URL } from '@/shared/config';

async function createResponse(
  url: string,
  method: string,
  token: string,
  body?: ICartUpdateRequest
) {
  try {
    const config: IConfig = {
      method,
      headers: {},
    };

    if (body) {
      config.headers['Content-Type'] = 'application/json';
      config.body = JSON.stringify(body);
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const getCartsByUser = (id: number, token: string): Promise<ICartResponse> => {
  const url = `${BASE_URL}/carts/user/${id}`;
  return createResponse(url, 'GET', token);
};

export const updateCart = (
  id: number,
  products: IProductUpdate[],
  token: string
): Promise<ICart> => {
  const url = `${BASE_URL}/carts/${id}`;
  const body = {
    merge: false,
    products,
  };
  return createResponse(url, 'PUT', token, body);
};
