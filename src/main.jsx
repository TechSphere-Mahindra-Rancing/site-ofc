import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import EstiloGlobal from './globalStyled';
import MainHome from './router/Home/MainHome.jsx';
import Error from './router/Error.jsx';
import MainNoticias from './router/Noticias/MainNoticias.jsx'
import MainLoja from './router/Store/MainLoja.jsx'
import MainCorridas from './router/Corridas/MainCorridas.jsx'
import MainSobre from './router/Sobre/MainSobre.jsx';
import MainPerfil from './router/Perfil/MainPerfil.jsx';

const router = createBrowserRouter([
  {
    // Elemento Pai
    path: "/", element: <App />, 
    errorElement: <Error />,

    // Elemento Filho
    children: [
      { path:'/', element: <MainHome /> },
      { path:'noticias', element: <MainNoticias/> },
      { path:'store', element: <MainLoja/> },
      { path:'corridas', element: <MainCorridas/>},
      { path:'sobre', element: <MainSobre/>},
      {path:'perfil',element: <MainPerfil/>}
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <RouterProvider router={router} />
  </StrictMode>,
);
