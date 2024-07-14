import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/entities/product/api/product';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartSlice } from '../entities/cart/model/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
