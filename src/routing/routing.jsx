import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';
import UserPage from '../components/UserPage';
import AlbumsList from '../components/AlbumsList';
import { UserDetails } from '../components/UserDetails/UserDetails';

const AppRoutes = {
  UserList: '/',
  UserPage: '/user/:id',
  PostList: '/user/:id/postList',
  TodoList: '/user/:id/todoList',
  AlbumsList: '/user/:id/albumList',
};

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: AppRoutes.UserList, element: <UserList />, index: true },
      {
        path: AppRoutes.UserPage,
        element: <UserPage />,
        children: [
          { path: AppRoutes.UserPage, element: <UserDetails />, index: true },
          {
            path: AppRoutes.PostList,
            element: <PostList />,
          },
          {
            path: AppRoutes.TodoList,
            element: <TodoList />,
          },
          { path: AppRoutes.AlbumsList, element: <AlbumsList /> },
        ],
      },
    ],
  },
]);
