import { DesingSect1Login } from "./StyleLogin";
import Pessoa from "../../../public/icon-pessoa.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sect1Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const registeredEmail = localStorage.getItem('email');
        const registeredPassword = localStorage.getItem('password');

        if (email === registeredEmail && password === registeredPassword) {
            navigate('/perfil');
        } else {
            alert('Email ou senha incorretos!');
        }
    };

    return (
        <DesingSect1Login>
            <div className="login-container">
                <h1 className="titulo-login">Página de Login</h1>
                <div className="loginprofile-container">
                    <img src={Pessoa} alt="Ícone Pessoa" className="imagem-login" />
                    <form className="perfil-formlogin" onSubmit={handleLogin}>
                        <div className="form-grouplogin">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email: "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-grouplogin">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Senha: "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn-login" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </DesingSect1Login>
    );
}
