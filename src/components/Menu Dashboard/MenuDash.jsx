import { NavLink } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";

// ÍCONES
import { FaCalendarAlt, FaStore } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoCarSport, IoGameController, IoLogOut } from "react-icons/io5";

const MenuDash = () => {
  return (
    <MenuStyled>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-container">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><TbLayoutDashboardFilled /></span>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/calendario" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><FaCalendarAlt /></span>
              <span>Calendário</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/corridas" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><IoCarSport /></span>
              <span>Corridas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/egoat" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><IoGameController /></span>
              <span>E-GOAT</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/etalk" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><FaPeopleGroup /></span>
              <span>E-Talk</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/weather" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><TiWeatherPartlySunny /></span>
              <span>Weather</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/loja" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <span className="icon"><FaStore /></span>
              <span>Loja</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="btn-out">
        <button>
          <NavLink to="/cadastro">
            <IoLogOut className="icon-logout" />
          </NavLink>
        </button>
      </div>
    </MenuStyled>
  );
};

export default MenuDash;
