import { DesignSect2Loja } from "./styleLoja";
import Bone4 from "../../../public/bone4.jpg"
import Bone5 from "../../../public/bone5.jpeg"
import Bone6 from "../../../public/bone6.jpeg"

export default function Sect2Loja(){
    return(
        <DesignSect2Loja>
            <div className="produto4">
                <img src={Bone4} alt="imagem de um bone branco" />
                <h1>Boné branco</h1>
                <h2>1000 P</h2>
            </div>  
            <div className="produto5">
                <img src={Bone5} alt="imagem de um bone branco" />
                <h1>Dois Bonés brancos</h1>
                <h2>1800 P</h2>
            </div>  
            <div className="produto6">
                <img src={Bone6} alt="imagem de um bone branco" />
                <h1>Cap Mockup Boné</h1>
                <h2>2000 P</h2>
            </div>  
        </DesignSect2Loja>
    )
}