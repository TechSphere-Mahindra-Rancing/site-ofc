import { DesignSect2Loja } from "./styleLoja";
import Bone4 from "../../../public/bone4.jpg"
import Bone5 from "../../../public/bone5.jpeg"
import Bone6 from "../../../public/bone6.jpeg"

export default function Sect2Loja(){
    return(
        <DesignSect2Loja>
            <div className="produto4">
                <img src={Bone4} alt="imagem de um bone branco co, detalhes roxos" />
                <h1>Boné Com detelhes Roxos</h1>
                <h2>1000 P</h2>
            </div>  
            <div className="produto5">
                <img src={Bone5} alt="imagem de um bone branco com detalhes pretos" />
                <h1>Boné Preto e Branco</h1>
                <h2>1800 P</h2>
            </div>  
            <div className="produto6">
                <img src={Bone6} alt="imagem de um bone amarelo com poucos detalhes pretos" />
                <h1>Boné Amarelo com Preto</h1>
                <h2>2000 P</h2>
            </div>  
        </DesignSect2Loja>
    )
}