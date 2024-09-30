import { DesingSect1Home } from "./homeDesign";
import ImagemPrincipal from "../../../public/imagem-principal-home.png";
import { Link } from 'react-router-dom';  // Importando o Link do react-router-dom

export default function Sect1Home(){
    return(
        <DesingSect1Home>
            <div className="container-inicial">
                <img src={ImagemPrincipal} alt="dois pilotos da mahindra posando para uma foto oficial com um carro da mahindra atrás" />

                <h1>CONHEÇA OS PILOTOS</h1>
                {/* Usar o Link em vez de a */}
                <Link to="/pilotos">SAIBA MAIS</Link>
            </div>
        </DesingSect1Home>
    )
}
