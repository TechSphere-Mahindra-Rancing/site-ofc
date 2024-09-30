import styled from "styled-components";

export const DesignMainNoticias = styled.main`


    #titulo{
        font-size: 32px;
        color: #b32b39;
        text-align: center;
        font-weight: 400;
        padding-top: 10px;
        margin-bottom: 30px;
    }

    background-color: #f0f0f0;

`

export const DesignSect1Noticias = styled.section`

    
    height: auto;
    a{
        text-decoration: none;
        color: black;
    }

    p{
        text-align: start;
        font-size: 16px;
    }

    h1{
        color:#b32b39 ;
        font-weight: 400;
    }
    

    img{
        width: 300px;
        border-radius: 8px;
    }   


    .container-noticia{
        display: flex;
        flex-direction: column;
        

    }

    .not1 { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px 300px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 5% ;
        transition: 0.4s;
    }

    .not1:hover{
        cursor: pointer;
        transform: scale(1.03);
    }

    .not2 { 
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px 300px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 5% ;
        transition: 0.4s;
    }

    .not2:hover{
        cursor: pointer;
        transform: scale(1.03);
    }

        
    .infos1{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 10px;
        padding: 0 11%;
        text-align: center;
    }    

    .infos2{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 10px;
        padding: 0 11%;
        text-align: center;
    }   

    .not3:hover{
        cursor: pointer;
        transform: scale(1.03);
    }

    @media (max-width: 768px){
        height: auto;


    p{
        text-align: start;
        font-size: 14px;
    }

    h1{
        color:#b32b39 ;
        font-weight: 400;
    }
    

    img{
        width: 200px;
    }   



    .not1 { 
        margin: 20px 100px;

    }


    .not2 { 
        margin: 20px 100px;
    }

        

    }

    @media (max-width: 480px){

    }

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
        
    }
    .paragrafo1 p {
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

    @media (max-width: 768px) {
        img{
        width: 300px;
    }
        gap: 10px;

        #titulo-principal{
            font-size: 30px;
            margin-top: 3%;
            color: #b32b39;
            padding-bottom: 2%;
        }

        p{
            font-size: 12px;
        }

        h1{
            color: #b32b39;
            font-size: 20px;
        }

        .noticia1{
            padding-right: 10%;
            
        }

        .paragrafo1{
            gap: 15px;
            padding: 0 5% 0 15%;
            
        }
 
    }
`
export const DesignNoticia2 = styled.main`
    img{
        width: 400px;
    }
    background-color: #f0f0f0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.3fr  1fr  0.4fr  0.2fr 0.7fr 0.7fr  0.7fr 0.3fr 0.3fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    p{
        font-size: 16px;
        text-align: justify;
    }

    h1{
        font-size: 30px;
        color: #b32b39;
    }

    #titulo-principal { grid-area: 1 / 1 / 2 / 2;
    text-align: center;
    padding-top: 1%;
    font-size: 50px;
    font-weight: 500;
    color: #b32b39;
    }

    .paragrafo-inicial { grid-area: 2 / 1 / 3 / 2;
    text-align: justify;
    padding: 2%  15% 2% 15%;
    border-bottom: 1px solid #b32b39;
    }

    .noticia1 { grid-area: 3 / 1 / 4 / 2; 
    display: flex;
    align-items: center;
    padding:3% 10%;
    border-bottom: 1px solid #b32b39;
    }

    .paragrafo1{
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

    .paragrafo1 p{
        text-align: justify;
    
    }
    .noticia2 { grid-area: 4 / 1 / 5 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 15%;
    gap: 15px;
    }
    #titulo-secundario { grid-area: 5 / 1 / 6 / 2;
    text-align: center;
    padding: 2% 0 2% 0;
    font-size: 50px;
    border-top:1px solid #b32b39 ;
    border-bottom: 1px solid #b32b39;
    }

    .noticia3 { grid-area: 6 / 1 / 7 / 2;
    display: flex;
    align-items: center;
    padding: 2% 10% 0 10%;
    }

    .noticia3 img{
        width: 300px;
    }

    .paragrafo3{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 5%;
    }

    .noticia4 { grid-area: 7 / 1 / 8 / 2;
    display: flex;
    align-items: center;
    padding: 0 10%;
    }

    .paragrafo4{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 5%;
    }

    .noticia4 img{
        width: 300px;
    }

    .noticia5 { grid-area: 8 / 1 / 9 / 2;
       display: flex;
    align-items: center;
    padding: 0 10%;
    }

    .paragrafo5{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 0 5%;
    }

    .noticia5 img{
        width: 300px;
    }

    .noticia-final { grid-area: 9 / 1 / 10 / 2; 
    display: flex;
    align-items: baseline;
    padding: 0 10% 2%;
    }

    .div1-final{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 40%;
        padding: 2% 5%;
    }

    .div2-final{
        width: 60%;
        padding: 2% 5%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }


    #paragrafo-final { grid-area: 10 / 1 / 11 / 2; 
    padding: 0 14%;
    }

    @media (max-width: 768px){
        img{
            width: 250px;
        }

        p{
            font-size: 12px;
            text-align: justify;
        }

        h1{
            font-size: 20px;
            color: #b32b39;
        }

        #titulo-principal {
        font-size: 30px;
        }


        #titulo-secundario { 
        font-size: 30px;

        }

        .noticia3 { grid-area: 6 / 1 / 7 / 2;
        display: flex;
        align-items: center;
        padding: 2% 10% 0 10%;
        }

        .noticia3 img{
            width: 150px;
        }


        .noticia4 img{
            width: 150px;
        }

      

        .noticia5 img{
            width: 150px;
        }

        .noticia-final { grid-area: 9 / 1 / 10 / 2; 
        display: flex;
        align-items: baseline;
        padding: 0 10% 2%;
        }

        .div1-final{
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 35%;
            padding: 2% 3%;
        }

        .div2-final{
            width: 65%;
            padding: 2% 4%;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }


        #paragrafo-final { grid-area: 10 / 1 / 11 / 2; 
        padding: 0 12% 5%;
        }

    }
`
