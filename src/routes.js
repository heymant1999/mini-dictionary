import { Navigate, useRoutes } from 'react-router-dom';
import {Dashboard} from './Dashboard';
import { LoginForm } from './LoginForm';

export  function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LoginForm />,
    },
    {
      path: '/login',
      element: <LoginForm />,
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    }
  ]);
}
