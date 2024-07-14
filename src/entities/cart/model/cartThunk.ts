import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCartsByUser } from '../api';

export const fetchCarts = createAsyncThunk(
  'productList/fetchProducts',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getCartsByUser(id);
      const { carts } = response;
      const cart = carts[0] || null;
      return { cart };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
