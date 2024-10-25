import styled from "styled-components";

export const DesingMainSobre = styled.main`
    background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    color: white;
    overflow: auto;

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

    .div-valores{
        display: flex;
        justify-content: center;
        gap: 100px;
    }

    .div-valores ul li{
        margin: 10px 0;
        list-style-type: none;
        font-size: 20px;
    }

    .lista{
        display: flex;
        background: rgba(255, 255, 255, 0.1);
        width: 400px;
        height: 300px;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        margin: 20px 0 100px 0;
    }

    .nossa-missao h2{
        text-align: center;
        font-size: 25px;
        font-weight: 600;
    }

    .frase-impactante{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 0 0 50px 0;
        padding: 0 150px;
    }

    .frase-impactante h3{
        font-size: 25px;
        font-weight: 600;
    }

    .frase-impactante h4{
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }

    .equipe{
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        margin-bottom: 100px;
    }

    .equipe h2{
        text-align: start;
        margin-left: 150px;

    }

    .equipe hr{
        width: 200px;
        margin-left: 150px;
        margin-bottom: 50px;
    }

    .primeira{
        width: fit-content;
        height: fit-content;
        display: flex;
        gap: 20px;
        padding: 0 150px;
        align-items: center;
    }

    .btn-ver-mais {
        text-align: end;
    }

    .segunda{
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: row-reverse;
        gap: 20px;
        padding: 0 150px;
        align-items: center;
    }

    .foto{
        height: 200px;
        min-width: 250px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 24px;
    }

    .paragrafo{
        margin: 10px 0;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        height: fit-content;
        padding: 20px 20px;
    }

    .negrito{
        font-weight: 700;
    }

    .paragrafo p{
        margin: 10px 0;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

        .modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        text-align: center;
        align-items: center;

        color: black;
    }


`
