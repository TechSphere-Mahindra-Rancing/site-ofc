import styled from "styled-components";

export const LoginStyled = styled.main`
    
    .container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    }

    .content {
        width: 90%;
        height: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.1);
        position: relative;
    }

    .content::before{
        content: "";
        position: absolute;
        background-color: #fff;
        width: 40%;
        height: 100%;
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
        transition: 1s;
        cursor: pointer;
    }

    .btn:hover{
        background: linear-gradient(90deg, rgba(187, 55, 55, 0.5) 0%, rgba(0, 62, 142, 0.5) 100%);
        color: rgba(255, 255, 255, 0.5);
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
        width: 50%;
        height: 50px;
        border-radius: 24px;
        padding: 14px;
        color: #585858;
        font-weight: 600;
    }

    .form .btn{
        margin: 0 0 50px 0;
        background: #BB3737;
        border: none;
    }

    .form .btn:hover{
        background: rgba(187, 55, 55, 0.5);
        color: rgba(255, 255, 255, 0.5);
    }

    .form a{
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
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
        animation: slidein 3s;

        z-index: 12;
    }

    .sign-up-js .content::before{
        animation: slideout 3s;
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

        25% {
            left: 5%;
            width: 50%;
        }

        50% {
            left: 25%;
            width: 60%;
        }

        75% {
            left: 45%;
            width: 50%;
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

        25% {
            left: 45%;
            width: 50%;
        }

        50% {
            left: 25%;
            width: 60%;
        }

        75% {
            left: 5%;
            width: 50%;
        }

        to {
            left: 0%;
            width: 40%;
        }
    }
`