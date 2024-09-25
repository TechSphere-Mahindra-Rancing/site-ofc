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
            <div className="redes-div">
                <a href="#"><img src="" alt="logo do instagram" /></a>
                <a href="#"><img src="" alt="logo do X" /></a>
                <a href="#"><img src="" alt="logo do facebook" /></a>
            </div>
            <div className="feedback-div">
                <form>
                    <input type="text" name="nome" id="nome-form" placeholder="Seu Nome" />
                    <input type="email" name="email" id="email-form" placeholder="Seu E-mail"/>
                    <input type="text" name="comment" id="comentario-form" placeholder="Seu Comentário" />
                </form>
            </div>
            <div className="direitos-div">
                <p>@2024 - Grupo TechSphere - Todos os direitos reservados</p>
            </div>
        </DesignFooter>
    )
}