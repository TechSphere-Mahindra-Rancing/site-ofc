import { DesignSect3Loja } from "./styleLoja";
import Tennis1 from "../../../public/tenis1.jpg"
import Tennis2 from "../../../public/tenis2.jpg"
import Tennis3 from "../../../public/tenis3.jpeg"


export default function Sect3Loja(){
    return(
        <DesignSect3Loja>
            <div className="produto1">
                <img src={Tennis1} alt="imagem de um tennis azul com detalhes brancos e pretos" />
                <h1>Tennis Azul Com Branco</h1>
                <h2>2000 P</h2>
            </div>  
            <div className="produto2">
                <img src={Tennis2} alt="imagem de um Tennis dourado" />
                <h1>Tennis Esportivo Dourado</h1>
                <h2>3400 P</h2>
            </div>  
            <div className="produto3">
                <img src={Tennis3} alt="imagem de um tennis verde com branco" />
                <h1>Tennis Verde Natura</h1>
                <h2>2000 P</h2>
            </div>  
        </DesignSect3Loja>
    )
}