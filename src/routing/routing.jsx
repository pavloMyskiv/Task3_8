import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import UserList from '../components/UserList';
import UserPage from '../components/UserPage';

const AppRoutes = {
  UserList: '/',
  UserPage: '/user/:id',
};

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <UserList />,
       index: true },
      {
        path: AppRoutes.UserPage,
        element: <UserPage />,
      },
    ],
  },
]);
