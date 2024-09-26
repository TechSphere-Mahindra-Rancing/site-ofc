import { DesignSect1Noticias } from "./styleNoticias";
import FotoNoticia1 from "../../../public/carro1-noticias.jpeg"

export default function Sect1Noticias(){
    return(
        <DesignSect1Noticias>
            <div className="not1">
                <img src={FotoNoticia1} alt="foto de um carro de formula e da mahindra" />
            </div>
            <div className="container-noticia">
                <div className="not2"> 

                </div>
                <div className="not3">

                </div>
            </div>    
        </DesignSect1Noticias>
    )
}