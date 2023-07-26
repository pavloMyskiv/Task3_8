import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const albumAPI = createApi({
  reduserPath: 'albumAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (userId) => `/users/${userId}/albums`,
      provideTags: ['Album'],
    }),
  }),
});

export const { useGetAlbumsQuery } = albumAPI;
