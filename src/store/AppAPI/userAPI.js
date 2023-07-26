import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
    getUser: builder.query({
      query:(userId)=>`/users/${userId}`,
    })
  }),
});

export const { useGetUsersQuery, useGetUserQuery} = userAPI;
