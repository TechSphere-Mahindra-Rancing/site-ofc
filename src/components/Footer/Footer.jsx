import { StyledFooter } from "./StyledFooter"
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";


export default function Footer(){
    return(
        <StyledFooter>
            <div className="content">
                <div className="section">
                    <h1 className="title-section">Equipe</h1>
                    <ul className="members-container">
                        <a href="#">
                            <li>Ianny Raquel</li>
                        </a>
                        <a href="#">
                            <li>Jean Matheus</li>
                        </a>
                        <a href="#">
                            <li>João Soave</li>
                        </a>
                        <a href="#">
                            <li>Maria Alice</li>
                        </a>
                        <a href="#">
                            <li>Thiago Oliveira</li>
                        </a>
                    </ul>
                </div>

                <div className="section">
                    <h1 className="title-section">Redes Sociais</h1>
                    <ul className="redes-container">
                        <a href="#">
                            <li>
                                <RiGithubFill className="icon-rede"/>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <MdEmail className="icon-rede"/>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <RiInstagramFill className="icon-rede"/>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="section">
                    <h1 className="title-section">Feedback</h1>
                    <form className="form-container">
                        <input type="text" name="nome" id="nome-form" placeholder="Seu Nome" />
                        <input type="email" name="email" id="email-form" placeholder="Seu E-mail"/>
                        <input type="text" name="comment" id="comentario-form" placeholder="Seu Comentário" />

                        <button className="btn">Enviar</button>
                    </form>
                </div>
            </div>

            <div className="section-direitos">
                <hr />
                <p>@2024 - Grupo TechSphere - Todos os direitos reservados</p>
            </div>
        </StyledFooter>
    )
}