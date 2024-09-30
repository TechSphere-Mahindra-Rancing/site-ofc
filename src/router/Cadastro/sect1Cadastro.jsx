import { DesingSect1Cadastro } from "./styleCadastro";
import camera from '../../../public/icon-camera.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Sect1Cadastro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        navigate('/login');
    };

    return (
        <DesingSect1Cadastro>
            <div className="cadastro-container">
                <h1 className="titulo-cadastro">Página de Cadastro</h1>
                <div className="cadastroprofile-container">
                    <img src={camera} alt="Ícone de Câmera" className="imagem-cadastro" />
                    <form className="perfil-formcadastro" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-groupcadastro">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-groupcadastro">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <button className="btn-cadastro" onClick={handleCadastro}>Cadastrar</button>
                </div>
            </div>
        </DesingSect1Cadastro>
    );
}
