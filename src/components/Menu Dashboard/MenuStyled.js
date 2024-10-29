import styled from "styled-components";

export const MenuStyled = styled.nav`

    width: 12%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    gap: 24px;
    
    .nav-container{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        gap: 20px;

        li {
            list-style: none;

            a {
                display: flex;
                gap: 10px;
                color: rgba(255, 255, 255, 0.5);
                text-decoration: none;
                transition: color 0.5s ease;
            }

        }
    }

    .logo{
        padding-bottom: 42px;
    }

    .nav-container li a:hover{
        color: #fff;
        padding-bottom: 0;
        transform: scale(1.03);
    }

    .nav-container .icon{
        font-size: 20px;
    }

    .icon-logout {
        font-size: 40px;
        color: rgba(255, 255, 255, 0.5);
    }

    .icon-logout:hover{
        color: #fff;
        padding-bottom: 0;
        transform: scale(1.03);
    }
 
    .btn-out {
        padding-top: 10px;

        button {
            background: none;
            border: none;
            font-size: 24px;
        }
    }

    .nav-container .active-link {   
        color: #fff;
    }

        /* Opcional: Para manter o estilo padrão dos links */
    .nav-container a {
        color: inherit;   /* Cor da fonte padrão */
        text-decoration: none; /* Remove o sublinhado padrão dos links */
    }

        /* Caso você queira adicionar transições */
    .nav-container .active-link,
    .nav-container a {
        transition: background 0.3s ease, color 0.3s ease; /* Efeito de transição suave */
    }

`