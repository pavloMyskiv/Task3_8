import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
};

const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    EmptyReducer: (state) => state,
  },
});
export const { setPostList } = postListSlice.actions;
export default postListSlice.reducer;
