import { DesingSect1Cadastro } from "./styleCadastro";
import camera from '../../../public/icon-camera.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Sect1Cadastro() {

    

    return (
        <DesingSect1Cadastro>
            <div className="principal-square">
                <div className="criar-conta">
                    <h1>Cadastrar Conta</h1>
                    <div className="form">
                        <form className="nome-sobrenome">
                            <input type="text" id="nome-input" placeholder="Nome" />
                            <input type="text" id="sobrenome-input" placeholder="Sobrenome" />
                        </form>
                        <form className="nasc-usuario">
                            <input type="date" id="data-input" placeholder="Nascimento" />
                            <input type="text" id="usuario-input" placeholder="Usuário" />
                        </form>
                        <form>
                            <input type="email" id="email-input" placeholder="E-mail"/>
                            <input type="password" id="senha-input" placeholder="Senha" />
                            <input type="password" id="senha2-input" placeholder="Confimação Senha" />
                        </form>
                    </div>
                    <button>Criar Conta</button>
                </div>
                <div className="bem-vindo">
                    <h1>Seja Bem-Vindo!</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime qui consectetur, est autem, nobis totam minima vitae praesentium cum.</p>
                    <button>Login</button>
                </div>
            </div>
        </DesingSect1Cadastro>
    )
}
