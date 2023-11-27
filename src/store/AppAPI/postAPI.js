import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (userId) => `users/${userId}/posts`,
      providesTags: ['Post'],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      async onQueryStarted(newPost, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postAPI.util.updateQueryData(
            'getPosts',
            `${newPost.userId}`,
            (draft) => {
              const updatedPostList = [newPost, ...draft];
              return updatedPostList;
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postAPI;
