import { Link } from "react-router-dom"
import { useRef } from "react"
import { FaBars, FaTimes, FaUser } from "react-icons/fa"
import { StyledHeader } from "./StyledHeader"

export default function Header(){

    const navRef = useRef();

    const showNavBar =()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <StyledHeader>
            <div>
                <h1>LOGO</h1>
            </div>
            <nav ref={navRef}>
                <Link to="/">Início</Link>
                <Link to="/">Notícias</Link>
                <Link to="/">Corridas</Link>
                <Link to="/">Loja</Link>
                <Link to="/">Dashborad</Link>
                <Link to="/">Sobre Nós</Link>
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