import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import EstiloGlobal from './globalStyled';

import MainHome from './router/Home/MainHome.jsx';
import Error from './router/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <Error />, 
    children: [
      { index: true, element: <MainHome /> }, 
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <RouterProvider router={router} />
  </StrictMode>,
);
