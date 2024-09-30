import { DesingSect1Cadastro } from "./styleCadastro";




export default function Sect1Cadastro(){
    return(
        <DesingSect1Cadastro>
            <div className="cadastro-container">
                <h1>Página de Cadastro</h1>
                <div className="cadastroprofil-container">
                    <img 
                        src="" 
                        alt="" 
                        className="imagem-cadastro" 
                    />
                    <form className="perfil-formcadastro">
                    
                    <div className="form-groupcadastro">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-groupcadastro">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                </form>
                    

                    <button>Entrar</button>
                </div>

                

            </div>
        </DesingSect1Cadastro>
    )
}