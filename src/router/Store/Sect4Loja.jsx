import { DesignSect4Loja } from "./styleLoja";
import Tennis4 from "../../../public/tenis4.jpeg"
import Tennis5 from "../../../public/tenis5.jpeg"
import Tennis6 from "../../../public/tenis6.jpeg"

export default function Sect4Loja(){
    return(
        <DesignSect4Loja>
            <div className="produto4">
                <img src={Tennis4} alt="imagem de um par de tennis laranja com detalhes azuis" />
                <h1>Tennis Bolinha</h1>
                <h2>2000 P</h2>
            </div>  
            <div className="produto5">
                <img src={Tennis5} alt="imagem de um par de tennis vermelho  e azul" />
                <h1>Tennis Vermelho e Azul</h1>
                <h2>3800 P</h2>
            </div>  
            <div className="produto6">
                <img src={Tennis6} alt="imagem de um tennis branco com detalhes dourados" />
                <h1>Tennis Ouro</h1>
                <h2>10000 P</h2>
            </div>
        </DesignSect4Loja>
    )
}