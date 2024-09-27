import { DesignSect3Loja } from "./styleLoja";
import Tennis1 from "../../../public/tenis1.jpg"
import Tennis2 from "../../../public/tenis2.jpg"
import Tennis3 from "../../../public/tenis3.jpeg"


export default function Sect3Loja(){
    return(
        <DesignSect3Loja>
            <div className="produto1">
                <img src={Tennis1} alt="imagem de um bone branco" />
                <h1>Boné branco</h1>
                <h2>1000 P</h2>
            </div>  
            <div className="produto2">
                <img src={Tennis2} alt="imagem de um bone branco" />
                <h1>Dois Bonés brancos</h1>
                <h2>1800 P</h2>
            </div>  
            <div className="produto3">
                <img src={Tennis3   } alt="imagem de um bone branco" />
                <h1>Cap Mockup Boné</h1>
                <h2>2000 P</h2>
            </div>  
        </DesignSect3Loja>
    )
}