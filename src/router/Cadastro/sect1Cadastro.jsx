import { DesingSect1Cadastro } from "./styleCadastro";
import camera from '../../../public/icon-camera.png'




export default function Sect1Cadastro(){
    return(
        <DesingSect1Cadastro>
            <div className="cadastro-container">
                <h1 className="titulo-cadastro">Página de Cadastro</h1>
                <div className="cadastroprofile-container">
                    <img 
                        src={camera} 
                        alt="" 
                        className="imagem-cadastro" 
                    />
                    <form className="perfil-formcadastro">
                    
                    <div className="form-groupcadastro">
                        
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-groupcadastro">
                        
                        <input type="password" id="password" name="password" placeholder="Senha"/>
                    </div>
                </form>
                    

                    <button className="btn-cadastro">Entrar</button>
                </div>

                

            </div>
        </DesingSect1Cadastro>
    )
}