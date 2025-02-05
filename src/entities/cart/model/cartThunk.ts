import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCartsByUser, updateCart } from '../api';
import { IProductUpdate } from './types';

export const fetchCarts = createAsyncThunk(
  'cart/fetchCarts',
  async ({ id, token }: { id: number; token: string }, { rejectWithValue }) => {
    try {
      const response = await getCartsByUser(id, token);
      const { carts } = response;
      const cart = carts[0] || null;
      return { cart };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

export const updateUserCard = createAsyncThunk(
  'cart/updateUserCard',
  async (data: { id: number; products: IProductUpdate[]; token: string }, { rejectWithValue }) => {
    try {
      const { id, products, token } = data;
      const response = await updateCart(id, products, token);
      return response;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
