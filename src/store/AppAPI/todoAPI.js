import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (selectedUserId) => `users/${selectedUserId}/todos`,
      providesTags: ['Todo'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todoAPI.util.updateQueryData(
            'getTodos',
            `${patch.userId}`,
            (draft) => {
              const updatedTodosList = draft.map((todo) => {
                if (todo.id === id) {
                  return { ...todo, ...patch };
                }
                return todo;
              });
              return updatedTodosList;
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
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: 'DELETE',
      }),
      async onQueryStarted({ id, userId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todoAPI.util.updateQueryData('getTodos', `${userId}`, (draft) => {
            const updatedTodosList = draft.filter(
              (todoItem) => todoItem.id !== id
            );
            return updatedTodosList;
          })
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

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoAPI;
