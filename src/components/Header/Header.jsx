import { Link } from "react-router-dom"
import { useRef } from "react"
import { FaBars, FaTimes, FaUser } from "react-icons/fa"
import { StyledHeader } from "./StyledHeader"

export default function Header(){

    const navRef = useRef();

    const showNavBar =()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    const hideNavBar =()=>{
        navRef.current.classList.remove("responsive_nav")
    }

    return(
        <StyledHeader>
            <div>
                <h1>LOGO</h1>
            </div>
            <nav ref={navRef}>
                <div id="logo">
                    <h1>LOGO</h1>
                </div>
                <Link to="/" onClick={hideNavBar}>Início</Link>
                <Link to="/noticias" onClick={hideNavBar}>Notícias</Link>
                <Link to="/dashboard" onClick={hideNavBar}>Dashboard</Link>
                <Link to="/sobre" onClick={hideNavBar}>Sobre Nós</Link>
                <Link to="/cadastro" className="icon-perfil" id="login" onClick={hideNavBar}>
                    <FaUser />
                </Link>
                <button className="nav-btn  nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <div className="use">
                <Link to="/cadastro" className="icon-perfil">
                    <FaUser />
                </Link>
                
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars />
                </button>
            </div>

        </StyledHeader>
    )
}