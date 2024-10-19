import { DesignHeader } from "../styled"
import Logo from '../../public/logo-mahindra.png'
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <DesignHeader>
            <div className="img-logo">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>INÍCIO</Link></li>
                    <li><Link to='/noticias'>NOTÍCIAS</Link></li>
                    <li><Link to='/store'>LOJA</Link></li>
                    <li><Link to='/corridas'>CORRIDAS</Link></li>
                    <li><Link to='/dashboard'>DASHBOARD</Link></li>
                    <li><Link to='/weather'>WEATHER</Link></li>
                    <li><Link to='/sobre'>SOBRE</Link></li>
                    
                </ul>
            </nav>
            <div className="perfil">
                <Link to='/cadastro'>Perfil</Link>
            </div>
        </DesignHeader>
    )
}