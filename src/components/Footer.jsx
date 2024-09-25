import { DesignFooter } from "../styled";

export default function Footer(){
    return(
        <DesignFooter>
            <h1 id="sobre">Sobre</h1>
            <h1 id="redes">Redes Sociais</h1>
            <h1 id="feedback">Feedback</h1>
            <div className="sobre-div">
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Parceiros</a></li>
                    <li><a href="#">#</a></li>
                </ul>
            </div>
            <div className="redes-div"></div>
            <div className="feedback-div"></div>
            <div className="direitos-div"></div>
        </DesignFooter>
    )
}