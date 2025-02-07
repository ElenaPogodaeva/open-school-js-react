import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './types';

const userToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export type UserState = {
  user: IUser | null;
  token: string | null;
};

const initialState: UserState = {
  user: null,
  token: userToken,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      if (action.payload.accessToken) {
        state.token = action.payload.accessToken;
        localStorage.setItem('token', action.payload.accessToken);
      }
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
