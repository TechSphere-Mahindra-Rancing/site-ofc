import styled from "styled-components";

export const DesignHome = styled.main`
    h1{
        color: #b32b39;
    }
`

export const DesingSect1Home = styled.section`
    .container-inicial{
        position: relative;
        width: 100%;
        display: flex;
    }

    .container-inicial img{
        width: 100%;
        display: block;
        height: 100vh;
        object-fit: cover;
        border-bottom: 1px solid #981717;
    }

    .container-inicial h1{
        position: absolute;
        color: #981717;
        font-size: 32px;
        font-weight: 150;
        letter-spacing: 10px;
        margin: 5% 0 0 3%;
    }

    .container-inicial a{   
        position: absolute;
        text-decoration: none;
        color: #981717;
        margin-top: 10%;
        margin-left: 3%;
        background-color: #FFD8DE;
        font-weight: 200;
        padding: 10px 20px;
        border-radius: 8px;
        transition: 1s;
    }

    .container-inicial a:hover{

        border: 1px solid #981717
    }

    @media (max-width: 768px){


        .container-inicial img{
        height: 80vh;
        width: 100%;
        object-fit: COVER;
    }

    .container-inicial h1{

        font-size: 22px;
  
        letter-spacing: 7px;
      
    }

    .container-inicial a{   

        font-size: 15px;
        
    }

    }


    
`

export const DesingSect2Home = styled.section`
    
    display: flex;    
    width: 100%;
    height: 80vh;

    img{
        width: 360px;
    }
    
    img{
        width: 360px;
    }

    .container-sect2{
        display: flex;
        align-items: center;
        margin: 0 10%;
        
    }

    .container-sect2-paragrafo{
        display: flex;
        flex-direction: column;
        margin: 0 10%;
        gap: 10px;
    }

    .container-sect2-paragrafo h1{
        font-size: 32px;
        letter-spacing: 6px;
    }

    .container-sect2-paragrafo p {
        font-size: 14px;
        text-align: justify;
    }

    @media (max-width: 768px){
     
        height: 60vh;

    img{
        width: 360px;
    }
    
    img{
        width: 250px;
    }


    .container-sect2-paragrafo{
  
        margin: 0 5%;
        gap: 10px;
    }

    .container-sect2-paragrafo h1{
        font-size: 20px;
        letter-spacing: 3px;
    }

    .container-sect2-paragrafo p {
        font-size: 12px;
    }
    }
`

export const DesingSect3Home = styled.section`

    .container-sect3{
        position: relative;
        width: 100%;
        display: flex;
    }

    .container-sect3 img{
        width: 100%;
        display: block;
        height: 100vh;
    }

    .paragrafos-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
        background-color: #FFFFFF;
        opacity: 80%;
        position: absolute;
        width: 100%;
        margin-top: 37%;
        
        
    }

    .paragrafos-container h1{
        font-size: 32px;
        letter-spacing: 6px;
        margin-left: 6%;
    }

    .paragrafos-container p{
        font-size: 16px;
        margin-left: 3%;
        margin-right: 5%;
    }

    @media (max-width: 768px){

    .container-sect3 img{
    
        height: 80vh;
    }

    .paragrafos-container{
        margin-top: 45%;
        
        
    }

    .paragrafos-container h1{
        font-size: 22px;
        letter-spacing: 3px;
        margin-left: 6%;
    }

    .paragrafos-container p{
        font-size: 14px;
        margin-left: 3%;
        margin-right: 5%;
    } 
    }
    
`

export const DesingSect4Home = styled.section`

display: flex;    
        width: 100%;
        height: 80vh;

    img{
        width: 360px;
    }

    .container-sect4{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin: 0 10%;
        
    }

    .container-sect4-paragrafo{
        display: flex;
        flex-direction: column;
        margin: 0 10%;
        gap: 10px;
    }

    .container-sect4-paragrafo h1{
        font-size: 32px;
        letter-spacing: 6px;
    }

    .container-sect4-paragrafo p {
        font-size: 14px;
        text-align: justify;
    }

    @media (max-width: 768px){
        
            height: 60vh;

        img{
            width: 250px;
        }

        .container-sect4{

            margin: 0 10%;
            
        }

        .container-sect4-paragrafo{

            margin: 0 5%;
            gap: 10px;
        }

        .container-sect4-paragrafo h1{
            font-size: 22px;
            letter-spacing: 3px;
        }

        .container-sect4-paragrafo p {
            font-size: 12px;
            text-align: justify;
        }


    }
`

export const DesingSect5Home = styled.section`

display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    gap: 10%;

    .titulo-subtitulo{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

    .titulo-subtitulo h1{
        color: #E61631;
        letter-spacing: 8px;
        font-size: 24px;
    }

    .titulo-subtitulo h2{
        color: #E61631;
        opacity: 50%;
        font-size: 20px;
    }

    img{
        width: 430px;
        border-radius: 32px;
    }

    .container-principal{
        display: flex;
        align-items: center;
        margin: 0 15%;
        gap: 10%;
    }

    .paragrafo{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .paragrafo p{
        font-size: 14px;
        text-align: justify;
    }

    .paragrafo h1{
        font-size: 32px;
    }

    .paragrafo a{
        text-decoration: none;
        color: #981717;
        background-color: #FFD8DE;
        font-weight: 200;
        padding: 10px 20px;
        border-radius: 8px;
        margin-right: 75%;
    }

    @media (max-width: 768px){

        height: 70vh;
        gap: 10%;

        .titulo-subtitulo{

            gap: 5px;
        }

        .titulo-subtitulo h1{
            color: #E61631;
            letter-spacing: 4px;
            font-size: 20px;
        }

        .titulo-subtitulo h2{

            font-size: 18px;
        }

        img{
            width: 250px;
            border-radius: 16px;
        }

        .container-principal{

            margin: 0 10%;
            gap: 10%;
        }

        .paragrafo{

            gap: 10px;
        }

        .paragrafo p{
            font-size: 12px;
            text-align: justify;
        }

        .paragrafo h1{
            font-size: 22px;
        }

        .paragrafo a{
            font-size: 14px;
            padding: 10px 20px;
            border-radius: 8px;
            margin-right: 62%;
        }
    }

`