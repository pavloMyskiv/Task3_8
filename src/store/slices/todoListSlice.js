import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
  editingTodoId: null,
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setEditingTodoId: (state, action) => {
      state.editingTodoId = action.payload;
    },
  },
});
export const { setEditingTodoId } = todoListSlice.actions;
export default todoListSlice.reducer;
