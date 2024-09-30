import styled from "styled-components";

export const DesignCorridasMain = styled.main`

    background-color: #f0f0f0;

    #titulo{
        font-size: 32px;
        color: #b32b39;
        text-align: center;
        padding-top: 10px;
    }

    .categorias{
        color: #b32b39;  
        text-align: center;
        margin: 20px 0 20px;
        font-size: 30px;
        font-weight: 300;
        border-bottom: 1px solid #b32b39;
        padding-bottom: 10px;
    }

    @media (max-width: 480px){

    #titulo{
        font-size: 22px;
    }

    .categorias{

        font-size: 18px;
    }
    }

`

export const DesingSect1Corrida = styled.section`



    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 60vh;
    margin-bottom: 50px;

    .bloco-corrida{
        grid-area: 1 / 1 / 2 / 2; 
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
    }

    .bloco-corrida:hover{
        cursor: pointer;
        transform: scale(1.05);
    }

    

    img{
        width: 175px;
        height: 270px;
        object-fit: cover;
        border-radius: 8px;
        
    }

    .info-corrida{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida h1{
        font-size: 36px;
    }

    .local-round{
        font-size: 25.5px;
    }

    hr{
        border: 2px solid black;
        border-radius: 16px;
    }

    h1 em{
        font-size: 22px;
    }

    h3 em{
        color: red;
       
    }

    .bloco-corrida2{
        grid-area: 1 / 2 / 2 / 3;  
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
     }

     .bloco-corrida2:hover{
        cursor: pointer;
        transform: scale(1.05);
    }



    .info-corrida2{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida2 h1{
        font-size: 36px;
    }

    .local-round2{
        font-size: 25.5px;
    }

    .bloco-corrida3{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
    }

    .bloco-corrida3:hover{
        cursor: pointer;
        transform: scale(1.05);
    }


    .info-corrida3{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida3 h1{
        font-size: 36px;
    }

    .local-round3{
        font-size: 25.5px;
    }

    @media (max-width: 768px){
    
    height: 30vh;

    img{
        width: 105px;
        height: 170px;
        object-fit: cover;
        border-radius: 8px;
        
    }


    .info-corrida h1{
        font-size: 26px;
    }

    .local-round{
        font-size: 15.5px;
    }

    h1 em{
        font-size: 20px;
    }

    h3 em{
        color: red;
        font-size: 20px;
       
    }


    .info-corrida2 h1{
        font-size: 26px;
    }

    .local-round2{
        font-size: 15.5px;
    }


    .info-corrida3 h1{
        font-size: 26px;
    }

    .local-round3{
        font-size: 15.5px;
    }


    }



    @media (max-width: 480px){

            
    margin-bottom: 20px;
    height: 170px;

    img{
        width: 45px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        
    }


    .info-corrida h1{
        font-size: 16px;
    }

    .local-round{
        font-size: 10px;
    }

    h1 em{
        font-size: 16px;
    }

    h3 em{
        color: red;
        font-size: 12px;
       
    }


    .info-corrida2 h1{
        font-size: 16px;
    }

    .local-round2{
        font-size: 10px;
    }


    .info-corrida3 h1{
        font-size: 16px;
    }

    .local-round3{
        font-size: 10px;
    }

    

    }
`

export const DesignSect2Corridas = styled.section`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 60vh;
    margin-bottom: 100px;

    .bloco-corrida{
        grid-area: 1 / 1 / 2 / 2; 
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
    }

    .bloco-corrida:hover{
        cursor: pointer;
        transform: scale(1.05);
    }

    

    img{
        width: 175px;
        height: 270px;
        object-fit: cover;
        border-radius: 8px;
        
    }

    .info-corrida{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida h1{
        font-size: 36px;
    }

    .local-round{
        font-size: 25.5px;
    }

    hr{
        border: 2px solid black;
        border-radius: 16px;
    }

    h1 em{
        font-size: 22px;
    }

    h3 em{
        color: red;
       
    }

    .bloco-corrida2{
        grid-area: 1 / 2 / 2 / 3;  
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
     }

     .bloco-corrida2:hover{
        cursor: pointer;
        transform: scale(1.05);
    }



    .info-corrida2{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida2 h1{
        font-size: 36px;
    }

    .local-round2{
        font-size: 25.5px;
    }

    .bloco-corrida3{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
    }

    .bloco-corrida3:hover{
        cursor: pointer;
        transform: scale(1.05);
    }


    .info-corrida3{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida3 h1{
        font-size: 36px;
    }

    .local-round3{
        font-size: 25.5px;
    }

    @media (max-width: 768px){

            
    height: 30vh;

    img{
        width: 105px;
        height: 170px;
        object-fit: cover;
        border-radius: 8px;
        
    }


    .info-corrida h1{
        font-size: 26px;
    }

    .local-round{
        font-size: 15.5px;
    }

    h1 em{
        font-size: 20px;
    }

    h3 em{
        color: red;
        font-size: 20px;
    
    }


    .info-corrida2 h1{
        font-size: 26px;
    }

    .local-round2{
        font-size: 15.5px;
    }


    .info-corrida3 h1{
        font-size: 26px;
    }

    .local-round3{
        font-size: 15.5px;
    }
            
}



    @media (max-width: 480px){

            
        margin-bottom: 20px;
    height: 170px;

    img{
        width: 45px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        
    }


    .info-corrida h1{
        font-size: 16px;
    }

    .local-round{
        font-size: 10px;
    }

    h1 em{
        font-size: 16px;
    }

    h3 em{
        color: red;
        font-size: 12px;
       
    }


    .info-corrida2 h1{
        font-size: 16px;
    }

    .local-round2{
        font-size: 10px;
    }


    .info-corrida3 h1{
        font-size: 16px;
    }

    .local-round3{
        font-size: 10px;
    }

    


}

`


export const DesignSect3Corridas = styled.section`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 60vh;
    margin-bottom: 100px;

    .bloco-corrida{
        grid-area: 1 / 1 / 2 / 2; 
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;

    }

    .bloco-corrida:hover{
        cursor: pointer;
        transform: scale(1.05);
    }

    

    img{
        width: 175px;
        height: 270px;
        object-fit: cover;
        border-radius: 8px;
        
    }

    .info-corrida{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida h1{
        font-size: 36px;
    }

    .local-round{
        font-size: 25.5px;
    }

    hr{
        border: 2px solid black;
        border-radius: 16px;
    }

    h1 em{
        font-size: 22px;
    }

    h3 em{
        color: red;
       
    }

    .bloco-corrida2{
        grid-area: 1 / 2 / 2 / 3;  
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
     }

     .bloco-corrida2:hover{
        cursor: pointer;
        transform: scale(1.05);
    }



    .info-corrida2{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida2 h1{
        font-size: 36px;
    }

    .local-round2{
        font-size: 25.5px;
    }

    .bloco-corrida3{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        margin: 5% 5%;
        padding: 5% 0 5% 5%;
        transition: 0.4s;
    }

    .bloco-corrida3:hover{
        cursor: pointer;
        transform: scale(1.05);
    }


    .info-corrida3{
        display: flex;
        flex-direction: column;
        margin: 0 5%;
        
    }

    .info-corrida3 h1{
        font-size: 36px;
    }

    .local-round3{
        font-size: 25.5px;
    }

    @media (max-width: 768px){
    
    margin-bottom: 70px;
    height: 30vh;

    img{
        width: 105px;
        height: 170px;
        object-fit: cover;
        border-radius: 8px;
        
    }


    .info-corrida h1{
        font-size: 26px;
    }

    .local-round{
        font-size: 15.5px;
    }

    h1 em{
        font-size: 20px;
    }

    h3 em{
        color: red;
        font-size: 20px;
       
    }


    .info-corrida2 h1{
        font-size: 26px;
    }

    .local-round2{
        font-size: 15.5px;
    }


    .info-corrida3 h1{
        font-size: 26px;
    }

    .local-round3{
        font-size: 15.5px;
    }

    }

    @media (max-width: 480px){

            
margin-bottom: 20px;
height: 170px;

img{
width: 45px;
height: 80px;
object-fit: cover;
border-radius: 8px;

}


.info-corrida h1{
font-size: 16px;
}

.local-round{
font-size: 10px;
}

h1 em{
font-size: 16px;
}

h3 em{
color: red;
font-size: 12px;

}


.info-corrida2 h1{
font-size: 16px;
}

.local-round2{
font-size: 10px;
}


.info-corrida3 h1{
font-size: 16px;
}

.local-round3{
font-size: 10px;
}




}

`

