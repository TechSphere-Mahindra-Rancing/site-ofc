import styled from "styled-components";

export const DesignLoginMain = styled.main`
    background-color: #F0F0F0;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const DesingSect1Login = styled.section`
    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    .titulo-login{
        font-size: 35px;
        color: #E61631;
        
    }

    .loginprofile-container{
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

    .imagem-login{
        border-radius: 100px;
        background: #C8C8C8;
        width: 150px;
        height: 150px;
        padding: 10px;
        
    }

    .perfil-formlogin{
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

    .btn-login{
        width: 150px;
        height: 60px;
        border-radius: 10px;
        background: #D52B1E;
        color: white;
        cursor: pointer;
        
    }

    .btn-login:hover{
        transform: scale(1.1);
        
    }
`