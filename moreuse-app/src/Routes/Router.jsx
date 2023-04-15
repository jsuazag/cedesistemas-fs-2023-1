import React, {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';

const Home = React.lazy(() => import('../Pages/Home') );
const WearDetail = React.lazy(() => import('../Pages/WearDetail') );
const Login = React.lazy(() => import('../Pages/Login') );

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>cargando...</div>}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "/wear-detail",
    element: (
      <Suspense fallback={<div>cargando...</div>}>
        <WearDetail />
      </Suspense>
    )
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>cargando...</div>}>
        <Login />
      </Suspense>
    )
  }
]);
