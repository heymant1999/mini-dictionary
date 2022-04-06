import { Navigate, useRoutes } from 'react-router-dom';
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
      path: '/home',
      element: <h1>Home</h1>
    }
  ]);
}
