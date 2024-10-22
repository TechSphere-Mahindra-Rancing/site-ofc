import { DesignSect1Loja } from "./styleLoja";
import Bone1 from "../../../public/bone1.avif"
import Bone2 from "../../../public/bone2.jpg"
import Bone3 from "../../../public/bone3.jpg"
import SetaDireita from "../../../public/seta-direita.png"
import SetaEsquerda from "../../../public/seta-esquerda.png"


export default function Sect1Loja(){

    return(
        <DesignSect1Loja>
            <div className="div1">
                <p id="parag1-div1">Por que eu devo comprar pontos?</p>
                <p id="parag2-div1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur minus, saepe eius praesentium rem soluta ipsum ad ducimus rerum beatae laudantium ullam nulla voluptatum illum, suscipit deserunt facilis itaque.</p>
            </div>
            <div className="div-divs">
                <img src={SetaEsquerda} alt="imagem de uma seta apontando para a esquerda" className="img1"/>
                <div className="div2"></div>
                <div className="div3"></div>
                <div className="div4"></div>
                <div className="div5"></div>
                <img src={SetaDireita} alt="imagem de uma seta apontando para a direita" className="img2"/>
            </div>
        </DesignSect1Loja>
    )
}