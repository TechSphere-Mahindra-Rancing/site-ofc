import { DesingSect1Home } from "./homeDesign";
import ImagemPrincipal from "../../../public/imagem-principal-home.png"


export default function Sect1Home(){
    return(
        <DesingSect1Home>
            <div className="container-inicial">
                <img src={ImagemPrincipal} alt="dois pilotos da mahindra posando para uma foto oficial com um carro da mahindra atrás" />

                <h1>CONHEÇA OS PILOTOS</h1>
                <a href="#">SAIBA MAIS</a>
            </div>
        </DesingSect1Home>
    )
}