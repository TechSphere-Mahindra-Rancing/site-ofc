import { DesignSect4Loja } from "./styleLoja";
import Tennis4 from "../../../public/tenis4.jpeg"
import Tennis5 from "../../../public/tenis5.jpeg"
import Tennis6 from "../../../public/tenis6.jpeg"
import SetaDireita from "../../../public/seta-direita.png"
import SetaEsquerda from "../../../public/seta-esquerda.png"


export default function Sect4Loja(){
    return(
        <DesignSect4Loja>
            <div className="div-divs">
                <img src={SetaEsquerda} alt="imagem de uma seta apontando para a esquerda" className="img1"/>
                <div className="div2"></div>
                <div className="div3"></div>
                <div className="div4"></div>
                <div className="div5"></div>
                <img src={SetaDireita} alt="imagem de uma seta apontando para a direita" className="img2"/>
            </div>
        </DesignSect4Loja>
    )
}