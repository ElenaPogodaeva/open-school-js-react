import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, LIMIT } from '@/shared/config';
import { IProduct, IProductsQueryParams, IProductsResponse } from '../model/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/products/` }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, IProductsQueryParams>({
      query: (args) => {
        const { search, page } = args;
        return {
          url: 'search/',
          params: {
            q: search,
            limit: LIMIT.toString(),
            skip: (page * LIMIT).toString(),
          },
        };
      },
      providesTags: ['Products'],

      serializeQueryArgs: ({ queryArgs }) => {
        const { page, ...otherArgs } = queryArgs;
        return otherArgs;
      },
      merge: (currentCache, newItems) => {
        currentCache.products.push(...newItems.products);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => id,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
