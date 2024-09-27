import styled from "styled-components";

export const DesignLojaMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 100px;

`

export const DesignSect1Loja = styled.section`

    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    height: 70vh;

    h1{
        margin-top: 10px;
        font-weight: 200;
        font-size: 26px;
    }

    h2{
        background-color: #ffdae3;
        margin-top: 10px;
        padding: 5px 10px;
        font-weight: 500;
        border-radius: 8px;
    }

    img{
        width: 300px;
        height: 380px;
        object-fit: cover;
        border: 0.5px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }

    .produto1{
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;
        
    }

    .produto2{
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;
    }

    .produto3{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;

    }

`


export const DesignSect2Loja = styled.section`


    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    height: 70vh;

    h1{
        font-weight: 200;
        font-size: 26px;
    }

    h2{
        background-color: #ffdae3;
        margin-top: 10px;
        padding: 5px 10px;
        font-weight: 500;
        border-radius: 8px;
    }

    img{
            width: 300px;
            height: 380px;
            object-fit: cover;
            border: 0.5px solid rgba(0, 0, 0, 0.3);
        }

    .produto4{
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;
    }   

    .produto5{
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;
    }

    .produto6{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;
    }

`

export const DesignSect3Loja = styled.section`


`

export const DesignSect4Loja = styled.section`


`

