import styled from "styled-components";

export const StyledHeader = styled.header`

    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background: #fff;
    position: relative;
    z-index: 15;

    nav {
        display: flex;
        gap: 30px;
        
        transition: 2s;
    }

    nav a{
        padding: 4px;
        color: #001734;
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        transition: background 0.5s ease, color 0.5s ease; /* Transições de background e cor */
    }

    nav a:hover{
        color: #3C5370;
        border-bottom: 2px solid #3C5370;
        padding-bottom: 0;
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

    .use{
        display: flex;
        align-items: center;
        gap: 12px;

        .icon-perfil{
            background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
            padding: 8px 12px 4px;
            font-size: 24px;
            color: #fff;
            border-radius: 100%;
            transition: background 0.5s ease, color 0.5s ease; /* Transições de background e cor */
           
        }
    }

    .icon-perfil:hover {
        background: linear-gradient(90deg, rgba(187, 55, 55, 0.5) 0%, rgba(0, 62, 142, 0.5) 100%);
        color: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 750px) {

        justify-content: space-between;

        .nav-btn{
            display: flex;
            opacity: 1;
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
        }

        .responsive_nav{
            transform: none;
        }

        .nav-close-btn{
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        nav a{
            font-size: 1.5rem;
            transition: none;
        }
    }
        
`