import styled from "styled-components";

export const TopStyled = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;

    .title{
        font-weight: 600;
    }

    .uses {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .perfil {
        display: flex;
        align-items: center;
    }

    .icon {
        color: #BB3737;
        font-size: 20px;
        margin-top: 5px;
    }
    
    .search .icon {
        position: relative;
        left: 12.7%;
    }

    .search input{
        border: none;
        background-color: rgba(217, 217, 217, 0.5);
        padding: 12px 50px;
        border-radius: 24px;
        color: rgba(187, 55, 55, 1);
        font-weight: 600;
        outline: none;
    }

    input::placeholder {
        color: rgba(187, 55, 55, 0.5); /* ou a cor que desejar */
        opacity: 1; /* Garante que a cor seja exibida com opacidade total */
    }

    .search, .cash{
        display: flex;
        align-items: center;   
    }

    .notification {
        background-color: rgba(217, 217, 217, 0.5);
        border-radius: 24px;
        padding: 5px 10px 3px;
        margin-right: 30px;
        cursor: pointer;
    }

    .cash {
        background-color: rgba(217, 217, 217, 0.5);
        padding: 5px 10px 3px;
        margin-right: 30px;
        gap: 5px;
        font-weight: 600;
        border-radius: 24px;
        color: rgba(187, 55, 55, 1);
    }

    .profile img{
        width: 70px;
        cursor: pointer;
    }

    @media (max-width: 750px) {

        flex-direction: column;
        gap: 10px;

        .uses {
            flex-direction: column-reverse;
            gap: 12px;
        }

        .title {
            font-size: 16px;
            text-align: center;
        }

        .perfil {
            display: flex;
            align-items: center;
        }

        .profile img{
            width: 60px;
        }

        .search .icon {
            position: relative;
            left: 12%;
        }
    }
`