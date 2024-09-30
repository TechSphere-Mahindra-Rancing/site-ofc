import styled from "styled-components";

export const DesignPiloto = styled.main`
    background-color: #f0f0f0;

    img{
        width: 300px;
    }
    
    #titulo{
        color: #a52a2a;
        text-align: center;
        border-bottom: 1px solid #a52a2a;
        padding: 10px 0;
    }

    .piloto1{
        display: flex;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 30px 50px;
        border-radius: 16px;
    }

    .paragrafo1{
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: justify;
        padding: 0 40px;
    }

     h1{
        color: #a52a2a;
        font-weight: 400;
    }

    p{
        font-size: 14px;
    }

    .piloto2{
        display: flex;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 30px 50px;
        border-radius: 16px;
    }

    .paragrafo2{
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: justify;
        padding: 0 40px;
    }

    @media (max-width: 768px){

        img{
        width: 200px;}

    .piloto1{

        margin: 30px 50px;
        border-radius: 16px;
    }

    .paragrafo1{
        padding: 20px 40px;
    }


    p{
        font-size: 12px;
    }

    .piloto2{

        margin: 30px 50px;
        border-radius: 16px;
    }

    .paragrafo2{
        padding: 20px 40px;
    }

    }


    @media (max-width: 480px){
        img{
        width: 200px;}

    .piloto1{
        flex-direction: column;
        margin: 30px 30px;
        border-radius: 16px;
        padding: 20px 0;
    }

    .paragrafo1{
        padding: 20px 40px;
    }


    p{
        font-size: 12px;
    }

    h1{
        font-size: 20px;
    }

    .piloto2{
        flex-direction: column;
        margin: 30px 30px;
        border-radius: 16px;
        padding: 20px 0;
    }

    .paragrafo2{
        padding: 20px 40px;
    }


    }
`