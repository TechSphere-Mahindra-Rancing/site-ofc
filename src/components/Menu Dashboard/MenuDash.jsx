import { Link } from "react-router-dom"
import { MenuStyled } from "./MenuStyled"

// ICONES
import { FaCalendarAlt, FaStore } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoCarSport, IoGameController } from "react-icons/io5";

const MenuDash =()=>{

    return (

        <MenuStyled>
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <nav className="nav-container">
                <ul className="nav-container">
                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><TbLayoutDashboardFilled /></span>
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><FaCalendarAlt /></span>
                        <span>Calendário</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><IoCarSport /></span>
                        <span>Corridas</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><IoGameController /></span>
                        <span>E-GOAT</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><FaPeopleGroup /></span>
                        <span>E-Talk</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><TiWeatherPartlySunny /></span>
                        <span>Weather</span>
                        </Link>

                    </li>

                    <li>
                        <Link to="/dashboard">
                        <span className="icon"><FaStore /></span>
                        <span>Loja</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="btn-out">
                <button>
                    icon 
                </button>
            </div>

        </MenuStyled>
    )
}

export default MenuDash