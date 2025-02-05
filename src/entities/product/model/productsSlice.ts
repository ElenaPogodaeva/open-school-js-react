import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductsState = {
  searchValue: string;
  currentPage: number;
  isLoading: boolean;
  error: string;
};

const initialState: ProductsState = {
  searchValue: '',
  currentPage: 0,
  isLoading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state) => {
      state.currentPage += 1;
    },
    resetPage: (state) => {
      state.currentPage = 0;
    },
  },
});

export const { setSearchValue, setCurrentPage, resetPage } = productsSlice.actions;
