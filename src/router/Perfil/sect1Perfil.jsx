import React from 'react';
import { DesingSect1Perfil } from './stylePerfil';
import camera from '../../../public/icon-camera.png'

export default function Sect1Perfil() {
    return (

        <DesingSect1Perfil>
            <div className="perfil-container">
                
                <img 
                    src={camera}
                    alt="Foto do usuário" 
                    className="perfil-imagem"
                />

                
                <form className="perfil-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                </form>
            </div>

            
            <input 
                type="text" 
                placeholder="Outro campo" 
                className="perfil-input-extra" 
            />
        </DesingSect1Perfil>
    );
}
