import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/shared/config';
import { RootState } from '@/app/store';
import { IUser, ILogin } from '../model/types';
import { logout } from '../model/userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/auth/`,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).user;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);
  const { error } = result;
  if (error && (error.status === 401 || error.status === 403)) {
    api.dispatch(logout());
  }
  return result;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    loginUser: builder.mutation<IUser, ILogin>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<IUser, void>({
      query: () => 'me',
    }),
  }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = userApi;
