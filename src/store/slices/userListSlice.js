import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: { EmptyReducer: (state) => state },
});
export const { selectUser } = userListSlice.actions;
export default userListSlice.reducer;
