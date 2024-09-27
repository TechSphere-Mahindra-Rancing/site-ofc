import { DesignSect1Loja } from "./styleLoja";
import Bone1 from "../../../public/bone1.avif"
import Bone2 from "../../../public/bone2.jpg"
import Bone3 from "../../../public/bone3.jpg"


export default function Sect1Loja(){

    return(
        <DesignSect1Loja>
            <div className="produto1">
                <img src={Bone1} alt="imagem de um bone branco" />
                <h1>Boné branco</h1>
                <h2>1000 P</h2>
            </div>  
            <div className="produto2">
                <img src={Bone2} alt="imagem de dois bones brancos" />
                <h1>Dois Bonés brancos</h1>
                <h2>1800 P</h2>
            </div>  
            <div className="produto3">
                <img src={Bone3} alt="imagem de um bone escrito cap mockup" />
                <h1>Cap Mockup Boné</h1>
                <h2>2000 P</h2>
            </div>  
        </DesignSect1Loja>
    )
}