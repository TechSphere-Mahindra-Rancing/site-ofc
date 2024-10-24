import styled from "styled-components";

export const DesingMainSobre = styled.main`
    background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    color: white;


    #banner{
        
        display: flex;
        justify-content: center;
    }

    .imagem-inicial{
        height: 400px;
        width: 1100px;
        background: rgba(255, 255, 255, 0.1);
        margin-top: 50px;
        border-radius: 24px;
    }

    .primeira-section{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 80px 0;
        padding: 0 150px;
    }

    .primeiro-paragrafo{
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 20px;
    }

    .primeira-section h1{
        font-size: 30px;
        font-weight: 600;
    }

    .primeira-section hr{
        border: 2px solid white
        
}
`
