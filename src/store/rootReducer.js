import { combineReducers } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';
import postListReducer from './slices/postListSlice';
import userListReducer from './slices/userListSlice';
import { userAPI } from './AppAPI/userAPI';
import { postAPI } from './AppAPI/postAPI';
import { todoAPI } from './AppAPI/todoAPI';
import { albumAPI } from './AppAPI/albumAPI';

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  postList: postListReducer,
  userList: userListReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [todoAPI.reducerPath]: todoAPI.reducer,
  [albumAPI.reducerPath]: albumAPI.reducer,
});
