import styled from "styled-components";

export const DesignCadastroMain = styled.main`
    background-color: #F0F0F0;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const DesingSect1Cadastro = styled.section`
    .cadastro-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    .titulo-cadastro{
        font-size: 35px;
        color: #E61631;
        
    }

    .cadastroprofile-container{
        width: 450px;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 2px solid #CF1818;
        border-radius: 20px;
        margin-top: 30px;
    

    }

    .imagem-cadastro{
        border-radius: 100px;
        background: #C8C8C8;
        width: 150px;
        height: 150px;
        padding: 10px;
        
    }

    .perfil-formcadastro{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
       
        
        
    }

    input{
        width: 300px ;
        padding: 5px;
        height: 50px;
        margin: 10px 5px;
        border: solid 1px #FB9191;
        border-radius: 5px;
    }

    .btn-cadastro{
        width: 150px;
        height: 60px;
        border-radius: 10px;
        background: #D52B1E;
        color: white;
        cursor: pointer;
        
    }

    .btn-cadastro:hover{
        transform: scale(1.1);
        
    }


`