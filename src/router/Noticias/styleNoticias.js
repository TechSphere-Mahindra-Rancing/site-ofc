import styled from "styled-components";

export const DesignMainNoticias = styled.main`

`

export const DesignSect1Noticias = styled.section`

    display: flex;

    img{
        width: 50%;

    }   


    .container-noticia{
        display: flex;
        flex-direction: column;

    }

    .infos2{
       
    }
`

export const DesignSect2Noticias = styled.section`

`

export const DesignSect3Noticias = styled.section`

`

export const DesingNoticia1 = styled.main`

    img{
        width: 400px;
    }

    background-color: #f0f0f0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.7fr 0.6fr 1.7fr 1.7fr 0.7fr;
    gap: 60px;

    #titulo-principal{
        grid-area: 1 / 1 / 2 / 2;
        font-size: 50px;
        font-weight: 500;
        letter-spacing: 3px;
        text-align: center;
        margin-top: 2%;
        color: #b32b39;
        border-bottom: 1px solid #b32b39;
        padding-bottom: 2%;
    }

    p{
        font-size: 16px;
    }

    h1{
        color: #b32b39;
    }

    .noticia1{
        grid-area: 2 / 1 / 3 / 2;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10%;
        
    }

    .paragrafo1{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 10%;
        text-align: justify;
    }

    .noticia2{
        grid-area: 3 / 1 / 4 / 2;
        padding: 0 20%;
    }

    .paragrafo2{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }


    .paragrafo2 p{
        text-align: justify;
    }

    .noticia3{
        grid-area: 4 / 1 / 5 / 2;
        display: flex;
        align-items: center;
        padding: 0 10%;
    }

    .paragrafo3{
        display: flex;
        flex-direction: column;
        padding: 0 5%;
        gap: 20px;
    }

    .paragrafo3 p{
        text-align: justify;
    }

    .noticia4{
        grid-area: 5 / 1 / 6 / 2; 
        display: flex;
        align-items: center;
        padding: 0 10%;
    }

    .paragrafo4{
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .paragrafo4 p{
        text-align: justify;
    }

    

    .noticia5{
        grid-area: 6 / 1 / 7 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15% 50px 15%;
        gap: 15px;
    }

    .noticia5 p{
        text-align: justify;
    }
`