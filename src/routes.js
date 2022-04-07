import { Navigate, useRoutes } from 'react-router-dom';
import {Home} from './Home';
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
      element: <Home/>
    }
  ]);
}
