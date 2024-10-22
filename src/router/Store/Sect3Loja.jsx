import { DesignSect3Loja } from "./styleLoja";
import Tennis1 from "../../../public/tenis1.jpg"
import Tennis2 from "../../../public/tenis2.jpg"
import Tennis3 from "../../../public/tenis3.jpeg"
import SetaDireita from "../../../public/seta-direita.png"
import SetaEsquerda from "../../../public/seta-esquerda.png"


export default function Sect3Loja(){
    return(
        <DesignSect3Loja>
            <div className="div-divs">
                <img src={SetaEsquerda} alt="imagem de uma seta apontando para a esquerda" className="img1"/>
                <div className="div2"></div>
                <div className="div3"></div>
                <div className="div4"></div>
                <div className="div5"></div>
                <img src={SetaDireita} alt="imagem de uma seta apontando para a direita" className="img2"/>
            </div>
        </DesignSect3Loja>
    )
}