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

         a{
            display: flex;
            color: rgba(255, 255, 255, 0.5);
        }

        span{
            font-size: 16px;
            margin-left: 10px;
        }

    }

    .logo{
        padding-bottom: 0;

        img {
            width: 80px;
        }
    }

    .nav-container .logo {
        display: none;
    }

    .nav-container a:hover{
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

    .nav-btn{
        display: none;
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        color: #001734;
        opacity: 0;
        font-size: 1.8rem;
    }

    .nav-container .active-link {   
        color: #fff;
    }

        /* Opcional: Para manter o estilo padrão dos links */
    .nav-container a{
        color: rgba(255, 255, 255, 0.5);   /* Cor da fonte padrão */
        text-decoration: none; /* Remove o sublinhado padrão dos links */
    }

        /* Caso você queira adicionar transições */
    .nav-container .active-link,
    .nav-container a {
        transition: background 0.3s ease, color 0.3s ease; /* Efeito de transição suave */
    }


    @media (max-width: 750px) {
        
        width: 100%;
        height: 10vh;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 24px;

        .nav-btn{
            display: flex;
            opacity: 1;
            background: none;
            font-size: 36px;
            border: none;
            color: #fff;
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background-color: #fff;
            transition: 1s;
            transform: translateY(-100vh);
            z-index: 2;
        }

        .nav-container{
            display: flex;
            align-items: center;

            a{
                color: rgba(187, 55, 55, 0.5);
                align-items: center;
            }

            span {
                font-size: 24px;
            }

        }
        
        .icon {
            margin-top: 5%;
        }

        .nav-container a:hover{
            color: #BB3737;
        }

        .logo{
            display: flex;
            align-items: center;
            padding: 20px;
            padding-bottom: 0;

            img {
                width: 100px;
            }
        }

        .nav-container .logo {
            display: flex;
        }

        .icon-logout {
            color:rgba(187, 55, 55, 0.5);
        }

        .icon-logout:hover{
            color: #BB3737;
        }

        .responsive_nav{
            transform: none;
        }

        .nav-close-btn{
            position: absolute;
            top: 2rem;
            right: 2rem;
            color: #BB3737;
        }

        nav a{
            font-size: 1.5rem;
            transition: none;
        }

        .nav-container .active-link {   
            color: #BB3737;
        }

        /* Opcional: Para manter o estilo padrão dos links */
        .nav-container a{
            color: rgba(187, 55, 55, 0.5);   /* Cor da fonte padrão */
            text-decoration: none; /* Remove o sublinhado padrão dos links */
        }
    }

`