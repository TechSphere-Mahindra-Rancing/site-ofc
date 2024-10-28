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
// import Calendario from "./"
import Corridas from "./router/Corridas/MainCorridas"
// import EGOAT from "./"
// import ETalk from "./"
import Weather from "./router/Weather/MainWeather"
import Loja from "./router/Store/MainLoja"

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
          {/* <Route path="/calendario" element={<Calendario />} /> */}
          <Route path="/corridas" element={<Corridas />} />
          {/* <Route path="/egoat" element={<EGOAT />} /> */}
          {/* <Route path="/etalk" element={<ETalk />} /> */}
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
