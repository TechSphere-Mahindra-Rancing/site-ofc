import styled from "styled-components";

export const LoginStyled = styled.main`
    
    .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
        transition: background 0.5s ease; /* Transição para o background */
    }

    .content {
        width: 90%;
        height: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
        position: relative;
        transition: background-color 0.5s ease; /* Transição de cor do fundo */

    }

    .content::before{
        content: "";
        position: absolute;
        background-color: #fff;
        width: 40%;
        height: 100%;
        transition: width 0.5s ease, left 0.5s ease; /* Transições no width e left */

    }

    .first-content {
        display: flex;
    }

    .first-content .second-column{
        z-index: 11;
    }

    .first-column {
        text-align: center;
        padding: 28px;
        color: #BB3737;

        flex: 0 0 40%;
        z-index: 10;
    }

    .rigth-column{
        color: #003E8E;
    }

    .second-column {
        text-align: center;

        padding: 28px;
        flex: 0 0 60%;
    }

    .title{
        font-size: 30px;
    }

    .description {
        font-size: 18px;
        font-weight: 600;
    }

    .diviser {
        display: inline-block;
        width: 50%;
        margin: 10px 0 24px;
        border: 2px solid #BB3737;
    }

    .diviser-rigth {
        display: inline-block;
        width: 50%;
        margin: 10px 0 24px;
        border: 2px solid #003E8E;
    }
 
    .btn {
        width: 50%;
        margin: 0 auto;
        padding: 8px 16px;
        margin: 50px 0;
        background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
        color: #fff;
        font-weight: 600;
        border: none;
        border-radius: 20px;
        transition: background 0.5s ease, color 0.5s ease; /* Transições de background e cor */
        cursor: pointer;
    }

    .btn:hover{
        background: linear-gradient(90deg, rgba(187, 55, 55, 0.5) 0%, rgba(0, 62, 142, 0.5) 100%);
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03);
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        gap: 24px;
    }

    .form-title{
        font-size: 30px;
        color: #fff;
        padding-bottom: 24px;
    }

    .form input{
        background: rgba(255, 255, 255, 0.5);
        border: none;
        color: #585858;
        font-weight: 600;
    }

    .input-container {
        position: relative;
        width: 50%;
        border-radius: 24px;
    }

    .input-container input {
        width: 100%;
        padding: 10px 10px 10px 30px;
        border-radius: 24px;
        border: 1px solid #ccc;
    }

    .input-container .icon {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        color: #888; /* Cor do ícone */
    }


    .form .btn{
        margin: 0 0 50px 0;
        background: #BB3737;
        border: none;
        transition: background 0.5s ease, color 0.5s ease; /* Transições no botão de form */
    }

    .form .btn:hover{
        background: rgba(187, 55, 55, 0.5);
        color: rgba(255, 255, 255, 0.5);
    }

    .form a{
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        transition: color 0.3s ease; /* Transição suave para links */
    }

    .form a:hover{
        color: #fff;
    }

    .second-content {
        display: flex;
        position: absolute;
    }

    .second-content .first-column{
        order: 2;
        z-index: -1;
    }

    .second-content .second-column {
        order: 1;
        z-index: -1;
    }

    .error-msg {
        color: #BB3737;
        font-size: 14px;
        font-weight: 600;
        margin: 8px 0;
        padding: 4px;
        background-color: #fff;
        border: 2px solid #BB3737;
        border-radius: 4px;
        text-align: center;
    }

    /* TRANSIÇÃO */
    .sign-in-js .first-content .first-column,
    .sign-in-js .first-content .second-column{
        z-index: -1;
    }

    .sign-in-js .second-content .second-column{
        z-index: 11;
    }
    
    .sign-in-js .second-content .first-column {
        z-index: 13;
    }

    .sign-in-js .content::before{
        left: 60%;
        animation: slidein 0.5s ease forwards;
        z-index: 12;
    }

    .sign-up-js .content::before{
        animation: slideout 0.5s ease forwards;
        z-index: 12;
    }


    .sign-up-js .second-content .first-column,
    .sign-up-js .second-content .second-column{
        z-index: -1;
    }

    
    .sign-up-js .first-content .second-column{
        z-index: 11;
    }

    .sign-up-js .first-content .first-column{
        z-index: 13;
    }

    /* Animação - Descolamento Conteúdo*/
    .sign-in-js .first-content .second-column {
        z-index: -1;
        position: relative;
    }

    .sign-up-js .second-content .second-column{
        z-index: -1;
        position: relative;
    }


    /* Animação - Deslocamento */
    @keyframes slidein {
        from {
            left: 0;
            width: 40%;
        }
        to {
            left: 60%;
            width: 40%;
        }
    }

    @keyframes slideout {
        from {
            left: 60%;
            width: 40%;
        }
        to {
            left: 0%;
            width: 40%;
        }
    }

    @media (max-width: 750px){
        
        .container {
            padding: 0 0 70px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: none;
            position: relative;
            background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
        }

        .content {
            position: absolute;
            width: 95%;
            min-height: 50%;
            justify-content: center;
            align-items: center;
        }

        .content::before {
            width: 100%;
            height: 50%;
            animation: slideout 0.5s ease forwards;
        }

        .first-content, .second-content {
            flex-direction: column;
        }
    
        .first-column, .second-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 16px;
            flex: 0 0 50%;
        }
    
        .title{
            font-size: 20px;
        }
    
        .description {
            font-size: 14px;
        }
    
        .diviser, .diviser-rigth {
            margin: 10px 0 10px;
        }
     
        .btn {
            width: 40%;
            margin: 0 auto;
            padding: 6px 12px;
            margin: 25px 0;
            border-radius: 12px;
        }
    
        .form {
            gap: 16px;
        }
    
        .form-title{
            font-size: 20px;
            padding-bottom: 12px;
        }
    
        .input-container {
            width: 100%;
            max-height: 30px;
            border-radius: 12px;
        }
    
        .input-container .icon {
            top: 50%;
        }
    
        .form .btn{
            margin: 20px 0;
            background: #BB3737;
            font-size: 12px;
            border: none;
        }


        /* Animação - Deslocamento Vertical */
        @keyframes slidein {
            from { left: 0%; top: 0; height: 50%; }
            to { left: 0%; top: 50%; height: 50%; }
        }

        @keyframes slideout {
            from { top: 50%; height: 50%; }
            to { top: 0; height: 50%; }
        }
    }
    
`