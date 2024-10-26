import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./LoginStyled";

export default function Login() {
    const [containerClass, setContainerClass] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [signUpData, setSignUpData] = useState({ usuario: '', senha: '', email: '' });
    const [loginData, setLoginData] = useState({ usuario: '', senha: '' });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Alterna a classe do container
    const handleSignIn = () => setContainerClass("sign-in-js");
    const handleSignUp = () => setContainerClass("sign-up-js");

    // Fetch inicial para carregar usuários no estado
    useEffect(() => {
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((data) => setUsuarios(data));
    }, []);

    // Função de cadastro de usuário
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");

        // Verifica se já existe um usuário com o mesmo nome de usuário ou email
        const usuarioExistente = usuarios.find((u) => u.usuario === signUpData.usuario);
        const emailExistente = usuarios.find((u) => u.email === signUpData.email);

        if (usuarioExistente) {
            setErrorMessage("Nome de usuário já cadastrado.");
            return;
        }
        if (emailExistente) {
            setErrorMessage("E-mail já cadastrado.");
            return;
        }

        // Se nome de usuário e email forem únicos, cadastra o usuário
        fetch("http://localhost:5000/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpData),
        }).then(() => {
            alert("Usuário cadastrado com sucesso!");
            setContainerClass("sign-in-js"); // Alterna para a tela de login
            setSignUpData({ usuario: '', senha: '', email: '' });
            setUsuarios([...usuarios, signUpData]); // Atualiza a lista de usuários com o novo cadastro
        });
    };

    // Função de login
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");

        // Verifica se o usuário e senha correspondem a um usuário cadastrado
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
            setErrorMessage("Usuário ou senha inválidos.");
        }
    };

    // Funções para atualizar os estados dos inputs
    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    return (
        <LoginStyled>
            <div className={`container ${containerClass}`}>
                {/* Seção de boas-vindas e botão para alternar para login */}
                <section className="content first-content">
                    <div className="first-column">
                        <h2 className="title">É Bom Ver Você!</h2>
                        <hr className="diviser" />
                        <p className="description">
                            Estamos prontos para mais uma corrida! Entre e venha acelerar junto com a Formula E!
                        </p>
                        <button id="signin" className="btn" onClick={handleSignIn}>Login</button>
                    </div>

                    {/* Formulário de Cadastro */}
                    <div className="second-column">
                        <h2 className="form-title">Criar Conta</h2>
                        <form className="form" onSubmit={handleSignUpSubmit}>
                            <input
                                type="text"
                                name="usuario"
                                placeholder="Usuário"
                                value={signUpData.usuario}
                                onChange={handleSignUpChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={signUpData.email}
                                onChange={handleSignUpChange}
                                required
                            />
                            <input
                                type="password"
                                name="senha"
                                placeholder="Senha"
                                value={signUpData.senha}
                                onChange={handleSignUpChange}
                                required
                            />
                            <button className="btn" type="submit">Criar</button>
                            {errorMessage && <p className="error">{errorMessage}</p>}
                        </form>
                    </div>
                </section>

                {/* Formulário de Login */}
                <section className="content second-content">
                    <div className="second-column">
                        <h2 className="form-title">Faça o seu Login</h2>
                        <form className="form" onSubmit={handleLoginSubmit}>
                            <input
                                type="text"
                                name="usuario"
                                placeholder="Usuário"
                                value={loginData.usuario}
                                onChange={handleLoginChange}
                                required
                            />
                            <input
                                type="password"
                                name="senha"
                                placeholder="Senha"
                                value={loginData.senha}
                                onChange={handleLoginChange}
                                required
                            />
                            <a className="link" href="#">Esqueci minha senha</a>
                            <button className="btn" type="submit">Entrar</button>
                            {errorMessage && <p className="error">{errorMessage}</p>}
                        </form>
                    </div>

                    {/* Seção de boas-vindas e botão para alternar para cadastro */}
                    <div className="first-column rigth-column">
                        <h2 className="title">Seja Bem-Vindo!</h2>
                        <hr className="diviser-rigth" />
                        <p className="description">
                            Junte-se à nossa comunidade apaixonada por Formula E!
                        </p>
                        <button id="signup" className="btn" onClick={handleSignUp}>Cadastrar-se</button>
                    </div>
                </section>
            </div>
        </LoginStyled>
    );
}
