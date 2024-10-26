import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./LoginStyled";

import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function Login() {
    const [containerClass, setContainerClass] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [signUpData, setSignUpData] = useState({ usuario: '', senha: '', email: '' });
    const [loginData, setLoginData] = useState({ usuario: '', senha: '' });
    const [errorMsg, setErrorMsg] = useState(''); // Estado para mensagens de erro
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((data) => setUsuarios(data));
    }, []);

    const handleSignIn = () => setContainerClass("sign-in-js");
    const handleSignUp = () => setContainerClass("sign-up-js");

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        // Verifica unicidade do usuário e email
        const userExists = usuarios.some((u) => u.usuario === signUpData.usuario);
        const emailExists = usuarios.some((u) => u.email === signUpData.email);

        if (userExists || emailExists) {
            setErrorMsg(
                userExists && emailExists
                    ? "Usuário e Email já estão em uso"
                    : userExists
                    ? "Usuário já está em uso"
                    : "Email já está em uso"
            );
            return;
        }

        fetch("http://localhost:5000/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpData),
        }).then(() => {
            alert("Usuário cadastrado com sucesso!");
            setErrorMsg(''); // Limpa a mensagem de erro após cadastro bem-sucedido
            setContainerClass("sign-in-js");
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = usuarios.find(
            (u) => u.usuario === loginData.usuario && u.senha === loginData.senha
        );

        if (user) {
            const token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", loginData.usuario);
            sessionStorage.setItem("token", token);
            navigate("/dashboard");
        } else {
            setErrorMsg("Usuário ou senha inválidos");
        }
    };

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    return (
        <LoginStyled>
            <div className={`container ${containerClass}`}>
                <section className="content first-content">
                    <div className="first-column">
                        <h2 className="title">É Bom Ver Você!</h2>
                        <hr className="diviser" />
                        <p className="description">Estamos prontos para mais uma corrida! Entre e venha acelerar junto com a Formula E!</p>
                        <button id="signin" className="btn" onClick={handleSignIn}>Login</button>
                    </div>

                    <div className="second-column">
                        <h2 className="form-title">Criar Conta</h2>
                        <form className="form" onSubmit={handleSignUpSubmit}>
                            <div className="input-container">
                                <FaUser className="icon"/>
                                <input
                                    type="text"
                                    name="usuario"
                                    placeholder="Usuário"
                                    value={signUpData.usuario}
                                    onChange={handleSignUpChange}
                                    required
                                />
                            </div>

                            <div className="input-container">
                                <MdEmail className="icon" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={signUpData.email}
                                    onChange={handleSignUpChange}
                                    required
                                />
                            </div>


                            <div className="input-container">
                                <RiLockPasswordFill className="icon"/>
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Senha"
                                    value={signUpData.senha}
                                    onChange={handleSignUpChange}
                                    required
                                />
                            </div>

                            {errorMsg && <p className="error-msg">{errorMsg}</p>} {/* Mensagem de erro */}
                            <button className="btn" type="submit">Criar</button>
                        </form>
                    </div>
                </section>

                <section className="content second-content">
                    <div className="second-column">
                        <h2 className="form-title">Faça o seu Login</h2>
                        <form className="form" onSubmit={handleLoginSubmit}>
                            <div className="input-container">
                                <FaUser className="icon"/>
                                <input
                                    type="text"
                                    name="usuario"
                                    placeholder="Usuário"
                                    value={loginData.usuario}
                                    onChange={handleLoginChange}
                                    required
                                />
                            </div>

                            <div className="input-container">
                                <RiLockPasswordFill className="icon"/>
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Senha"
                                    value={loginData.senha}
                                    onChange={handleLoginChange}
                                    required
                                />
                            </div>

                            {errorMsg && <p className="error-msg">{errorMsg}</p>} {/* Mensagem de erro */}
                            <button className="btn" type="submit">Entrar</button>
                        </form>
                    </div>
                    <div className="first-column rigth-column">
                        <h2 className="title">Seja Bem-Vindo!</h2>
                        <hr className="diviser-rigth" />
                        <p className="description">Junte-se à nossa comunidade apaixonada por Formula E!</p>
                        <button id="signup" className="btn" onClick={handleSignUp}>Cadastrar-se</button>
                    </div>
                </section>
            </div>
        </LoginStyled>
    );
}
