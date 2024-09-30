import styled from "styled-components";

export const DesignPerfilMain  =  styled.main`
    background-color: #f0f0f0;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const DesingSect1Perfil = styled.section`
    .perfil-container{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .perfil-imagem{
        border-radius: 100px;
        background-color: #FB9191;
        width: 150px;
        height: 150px;
        padding: 10px;
        
    }

    .perfil-form{
        display: flex;
        flex-direction: column;
        margin-left: 60px;
        
    }

    input{
        width: 400px ;
        height: 50px;
        margin: 20px 5px;
    }

    .perfil-input-extra{
        width: 800px;
        height: 300px;

    }


`