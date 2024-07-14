import { createSlice } from '@reduxjs/toolkit';
import { ICart } from '@/entities/cart/model/types';
import { fetchCarts } from './cartThunk';

export type CartState = {
  cart: ICart | null;
  isLoading: boolean;
  error: string;
};

const initialState: CartState = {
  cart: null,
  isLoading: false,
  error: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarts.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.cart = action.payload.cart;
    });
    builder.addCase(fetchCarts.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.cart = null;
    });
  },
});
