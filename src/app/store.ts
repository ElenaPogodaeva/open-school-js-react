import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/entities/product/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsSlice } from '@/entities/product';
import { cartSlice } from '@/entities/cart';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
