import { DesignHeader } from "../styled"
import Logo from '../../public/logo-mahindra.png'

export default function Header(){
    return(
        <DesignHeader>
            <div className="img-logo">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">INÍCIO</a></li>
                    <li><a href="#">NOTÍCIAS</a></li>
                    <li><a href="#">LOJA</a></li>
                    <li><a href="#">CORRIDAS</a></li>
                    <li><a href="#">SOBRE</a></li>
                </ul>
            </nav>
            <div className="perfil">
                <a href="#">P</a>
            </div>
        </DesignHeader>
    )
}