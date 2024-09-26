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

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.5fr 0.7fr 1.5fr 1.5fr 0.7fr;

    #titulo-principal{
        grid-area: 1 / 1 / 2 / 2;
        font-size: 50px;
        font-weight: 300;
        letter-spacing: 3px;
    }

    p{
        font-size: 16px;
    }

    .noticia1{
        background-color: aqua;
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
        background-color: beige;
        grid-area: 3 / 1 / 4 / 2;
    }

    .noticia3{
        background-color: bisque;
        grid-area: 4 / 1 / 5 / 2;
    }

    .noticia4{
        background-color: brown;
        grid-area: 5 / 1 / 6 / 2; 
    }

    .noticia5{
        background-color:yellow;
        grid-area: 6 / 1 / 7 / 2;

    }
`