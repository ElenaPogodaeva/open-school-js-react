import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '@/entities/cart/model/types';
import { calcDiscountPrice } from '@/shared/lib/price';
import { fetchCarts, updateUserCard } from './cartThunk';

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
  reducers: {
    deleteProduct(state, action: PayloadAction<number>) {
      state.cart!.products = state.cart!.products.filter((item) => item.id !== action.payload);
    },
    calcTotal(state) {
      state.cart!.total = +state
        .cart!.products.reduce((sum, curr) => sum + curr.total, 0)
        .toFixed(2);
      state.cart!.discountedTotal = +state
        .cart!.products.reduce((sum, curr) => {
          const discountPrice = calcDiscountPrice(curr.total, curr.discountPercentage);
          return sum + +discountPrice;
        }, 0)
        .toFixed(2);
      state.cart!.totalProducts = state.cart!.products.length;
      state.cart!.totalQuantity = state.cart!.products.reduce(
        (sum, curr) => sum + curr.quantity,
        0
      );
    },
  },
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
    builder.addCase(updateUserCard.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(updateUserCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';

      const [product] = action.payload.products;

      const productIndex = state.cart!.products.findIndex((item) => item.id === product.id);

      if (productIndex !== -1) {
        state.cart!.products[productIndex] = product;
      } else {
        state.cart!.products.push(product);
      }
    });
    builder.addCase(updateUserCard.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
    });
  },
});

export const { deleteProduct, calcTotal } = cartSlice.actions;
