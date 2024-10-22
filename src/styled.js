import styled from "styled-components";

export const DesignHeader = styled.header`
    margin: 0;
    background-color: #f0f0f0;
    border-bottom: 1px solid #a52a2a;
    display: grid;
    grid-template-columns: 0.4fr 1.6fr 0.5fr;
    min-height: 90px;
    align-items: center;
    text-align: center;

    .img-logo { 
        margin-left: 3em;
    }

    img{
        width: 130px;
    }

    nav { 
        grid-area: 1 / 2 / 2 / 3; 
        margin-left: 4em;
    }

    nav ul{
        display: flex;
        text-align: center;
    }
    
    nav ul li{
        list-style-type: none;
        margin: 0 4%;

    }

    nav a{
        text-decoration: none;
        font-size: 16px;
        color: #001734;
        transition: 0.4s;
        font-weight: 600;
        transition: 0.1s;
    }

    nav a:hover{
        color: #5D799CFF;
        border-bottom: 2px solid #001734  ;
    }

    .perfil { 
        grid-area: 1 / 3 / 2 / 4; 

    }

    .perfil a{
        background-color: #001734;
        padding: 15px 26px;
        border-radius: 50px;
        text-decoration: none;
        color: white;
        transition:0.4s;
    }

    .perfil a:hover{
        cursor: pointer;
        background-color: #5D799CFF;
    }

    @media (max-width: 768px){

        min-height: 80px;

        .img-logo { 
            padding-left: 2%;
        }

        img{
            width: 80px;
        }

        nav { 

            margin-left: 10%;
        }



        

        nav a{
 
            font-size: 10px;

        }


        .perfil a{

            padding: 5px 15px;

        }

        
    }

    @media (max-width: 480px){

            min-height: 60px;

            img{
                width: 80px;
            }


            nav ul{
                display: flex;
                text-align: center;
            }
            
            nav ul li{
                display: none;

            }

            nav a{
                font-size: 10px;
            }


            .perfil a{
                padding: 4px 15px;
                border-radius: 50px;

            }
        }
        
`

export const DesignFooter = styled.footer`
    margin: 0;
    background-color: #b32b39;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 0.5fr 1.2fr 0.3fr;
    width: 100%;
    height: 40vh;
    

    #sobre { grid-area: 1 / 1 / 2 / 2;
    text-align: center;
    padding-top: 2%;
    color: white;
    font-weight: 300;
    }

    #redes{ grid-area: 1 / 2 / 2 / 3;
    text-align: center;
    padding-top: 2%;
    color: white;
    font-weight: 300;
    }

    #feedback{ grid-area: 1 / 3 / 2 / 4;
    text-align: center;
    padding-top: 2%;
    color: white;
    font-weight: 300;
    }

    .sobre-div { 
    grid-area: 2 / 1 / 3 / 2; 
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .sobre-div ul li{
        list-style-type: none;
        margin: 15px 0;
    }

    .sobre-div a{
        text-decoration: none;
        font-size: 20px;
        color: white;
    }

    .redes-div { grid-area: 2 / 2 / 3 / 3; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    }

    img{
        width: 50px;
    }

    .feedback-div { grid-area: 2 / 3 / 3 / 4;
    
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 2% 20%;
    }

    #comentario-form{
        height: 70px;
        border: none;
        border-radius: 6px;
    }

    #nome-form{
        height: 30px;
        border: none;
        border-radius: 4px;
    }

    #email-form{
        height: 30px;
        border: none;
        border-radius: 4px;
    }

    .direitos-div { grid-area: 3 / 1 / 4 / 4;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    }

    @media (max-width: 768px){

        #sobre {
            font-size: 20px;
        }

        #redes{ 
            font-size: 20px;

        }

        #feedback{ 
            font-size: 20px;
        }

       

        .sobre-div ul li{
            list-style-type: none;
            margin: 15px 0;
        }

        .sobre-div a{
    
            font-size: 15px;
        
        }

   

        img{
            width: 30px;
        }


        form{
            gap: 10px;
            margin: 2% 20%;
        }

        #comentario-form{
            height: 50px;
        }

        #nome-form{
            height: 20px;
           
        }

        #email-form{
            height: 20px;
            
        }

        .direitos-div { 
        
            font-size: 10px;
        }

        @media (max-width: 480px){

            

        }

    }

    @media (max-width: 480px){
        
        height: 250px;
        
        img{
            width: 40px;
        }



        form{
      
            margin: 2% 10%;
        }


    }

`