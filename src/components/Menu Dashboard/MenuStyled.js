import styled from "styled-components";

export const MenuStyled = styled.nav`

    width: 12%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 24px;
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    
    .nav-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;

        li {
            list-style: none;

            a {
                display: flex;
                gap: 10px;
                color: #fff;
                text-decoration: none;
                transition: color 0.5s ease;
            }

        }
    }

    .nav-container li a:hover{
        color: rgba(255, 255, 255, 0.5);
        padding-bottom: 0;
        transform: scale(1.03);
    }

    .nav-container .icon{
        font-size: 20px;
    }

    .btn-out {
        padding-top: 50px;

        button {
            background: none;
            border: none;
            font-size: 24px;
        }
    }
`