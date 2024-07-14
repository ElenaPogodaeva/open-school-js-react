import { ICartResponse } from '@/entities/cart/model/types';
import { BASE_URL } from '@/shared/config';

export const getCartsByUser = async (id: number): Promise<ICartResponse> => {
  const url = `${BASE_URL}/carts/user/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
