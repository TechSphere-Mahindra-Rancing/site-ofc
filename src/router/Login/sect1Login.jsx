import { DesingSect1Login } from "./StyleLogin";






export default function Sect1Login(){
    return(
        <DesingSect1Login>
            <div className="login-container">
            <h1>Página de Login</h1>
                <div className="cadastroprofil-container">
                    <img 
                        src="" 
                        alt="" 
                        className="imagem-cadastro" 
                    />
                   <form className="perfil-formlogin">
                    
                    <div className="form-grouplogin">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-grouplogin">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                </form>

                    <button>Entrar</button>
                </div>

            </div>
        
        </DesingSect1Login>
    )
}