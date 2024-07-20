import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/entities/product/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsSlice } from '@/entities/product';
import { cartSlice } from '@/entities/cart';
import { userSlice } from '@/entities/user/model/userSlice';
import { userApi } from '@/entities/user/api';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
