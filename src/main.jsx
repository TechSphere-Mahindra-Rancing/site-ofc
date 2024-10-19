import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import EstiloGlobal from './globalStyled';
import MainHome from './router/Home/MainHome.jsx';
import Error from './router/Error.jsx';
import MainNoticias from './router/Noticias/MainNoticias.jsx';
import MainLoja from './router/Store/MainLoja.jsx';
import MainCorridas from './router/Corridas/MainCorridas.jsx';
import MainSobre from './router/Sobre/MainSobre.jsx';
import MainPerfil from './router/Perfil/MainPerfil.jsx';
import MainCadastro from './router/Cadastro/MainCadastro.jsx'; // Adicionando rota de cadastro
import MainLogin from './router/Login/MainLogin.jsx';       // Adicionando rota de login
import Noticia1 from './router/Noticias/No1.jsx';         // Adicionando a rota de Noticia1
import Noticia2 from './router/Noticias/Not2.jsx';         // Adicionando a rota de Noticia2
import MainPiloto from './router/PaginaPilotos/MainPilotos.jsx'
import MainDashboard from './router/Dashboard/MainDashboard.jsx';
import MainWeather from './router/Weather/MainWeather.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    errorElement: <Error />,
    children: [
      { path:'/', element: <MainHome /> },
      { path:'noticias', element: <MainNoticias/> },
      { path:'store', element: <MainLoja/> },
      { path:'corridas', element: <MainCorridas/>},
      { path:'sobre', element: <MainSobre/>},
      { path:'perfil', element: <MainPerfil/>},     // Página de perfil
      { path:'cadastro', element: <MainCadastro/>}, // Página de cadastro
      { path:'login', element: <MainLogin/>},       // Página de login
      { path:'noticia1', element: <Noticia1/> },    // Página da Noticia 1
      { path:'noticia2', element: <Noticia2/> },
      { path:'pilotos', element: <MainPiloto/> },
      {path:'dashboard', element: <MainDashboard/>},
      {path:'weather', element: <MainWeather/>}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <RouterProvider router={router} />
  </StrictMode>,
);
