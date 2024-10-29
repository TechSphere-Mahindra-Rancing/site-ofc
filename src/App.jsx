import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// IMPORTANDO OS LAYOUTS
import MainLayout from './Rotas/MainLayout';
import DashboardLayout from './Rotas/DashboardLayout';

// ROTAS MAIN LAYOUT
import Inicio from "./router/Inicio/index"
import Noticias from "./router/Noticias/MainNoticias"
import Sobre from "./router/Sobre/MainSobre"
import Login from "./router/Login e Cadastro/Login"

// ROTAS DASHBOARD
import Dashboard from "./router/Dashboard/MainDashboard"
import Corridas from "./router/Corridas/MainCorridas"
import Weather from "./router/Weather/MainWeather"
import Loja from "./router/Store/MainLoja"
import Egoat from './router/E-GOAT/Egoat';
import Etalk from './router/E-Talk/Etalk';
import MainCalendario from './router/Calendario/MainCalendario';

function App() {

  return (

    <Router>
      <Routes>
        {/* Rotas com Header e Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rota do Dashboard, sem Header e Footer */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendario" element={<MainCalendario />} />
          <Route path="/corridas" element={<Corridas />} />
          <Route path="/egoat" element={<Egoat />} />
          <Route path="/etalk" element={<Etalk />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/loja" element={<Loja />} />
        </Route>

        {/* Redirecionamento para o login caso a rota não exista */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}


export default App
