import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";

// ÍCONES
import { FaCalendarAlt, FaStore, FaTimes, FaBars } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoCarSport, IoGameController, IoLogOut } from "react-icons/io5";

const MenuDash = () => {

  //Menu Responsivo
  const navRef = useRef();

  const showNavBar =()=>{
      navRef.current.classList.toggle("responsive_nav");
  }

  const hideNavBar =()=>{
      navRef.current.classList.remove("responsive_nav")
  }


  return (
    <MenuStyled>
      <div className="logo">
        <h1>LOGO</h1>
      </div>

      <nav className="nav-container" ref={navRef}>
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><TbLayoutDashboardFilled /></span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/calendario" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><FaCalendarAlt /></span>
            <span>Calendário</span>
          </NavLink>

          <NavLink to="/corridas" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><IoCarSport /></span>
            <span>Corridas</span>
          </NavLink>

          <NavLink to="/egoat" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><IoGameController /></span>
            <span>E-GOAT</span>
          </NavLink>

          <NavLink to="/etalk" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><FaPeopleGroup /></span>
            <span>E-Talk</span>
          </NavLink>

          <NavLink to="/weather" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><TiWeatherPartlySunny /></span>
            <span>Weather</span>
           </NavLink>

          <NavLink to="/loja" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={hideNavBar}>
            <span className="icon"><FaStore /></span>
            <span>Loja</span>
          </NavLink>

          <div className="btn-out">
            <button>
              <NavLink to="/cadastro">
                <IoLogOut className="icon-logout" onClick={hideNavBar}/>
              </NavLink>
            </button>
          </div>

          <button className="nav-btn  nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
      </nav>

      <div className="use">
        <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
        </button>
      </div>
    </MenuStyled>
  );
};

export default MenuDash;
