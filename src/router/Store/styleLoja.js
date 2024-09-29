import styled from "styled-components";

export const DesignLojaMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: #f0f0f0;

    #titulo{
        color: #a52a2a;
        font-size: 30px;
        font-weight:400;
        text-align: center;
        margin-top: 10px;
    }

    .categorias{
        font-size: 42px;
        height: 20%;
        text-align: center;
        font-weight: 400;
        border-bottom: 1px solid #a52a2a;
        color: #a52a2a;
    }

    @media (max-width: 768px){
       .categorias{
        font-size: 30px;
       }

       #titulo{
        font-size: 20px;
       }

    }
   

    @media (max-width: 480px){
        .categorias{
        font-size: 20px;
       }

       #titulo{
        font-size:20px;
       }

    }
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
        border: 0.5px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    .produto1{
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        border-radius: 8px;
        transition: 0.5s;
    }

    .produto1:hover{
        transform: scale(1.05);
        cursor: pointer;
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
        transition: 0.4s;
        justify-content: center;
    }

    .produto2:hover{
        transform: scale(1.05);
        cursor: pointer;
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
        justify-content: center;
        transition: 0.4s;

    }

    .produto3:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
    @media (max-width: 768px){
        img{
            width: 180px;
            height: 260px;
        }

        h1{
            font-size: 20px;
        }

        height: 40vh;
        .produto1{
                margin: 0 5% 0 5%;
                padding: 20px 0;
                border-radius: 8px;
                
            }
        .produto2{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }
        .produto3{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }

    }

    @media (max-width: 480px){

height: 20vh;

h1{

    font-size: 16px;
}

h2{

    margin-top: 5px;
    padding: 5px 10px;
    font-size: 14px;
}

img{
        width: 90px;
        height: 140px;

    }

.produto1{
padding: 10px 10px;

}   


.produto2{

    padding: 10px 10px;
}



.produto3{
    margin: 0 10% 0 10%;
    padding: 10px 10px;
}

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
            border: 0.5px solid rgba(0, 0, 0, 0.2);
        }

    .produto4{
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        justify-content: center;
        border-radius: 8px;
        transition: 0.5s;
    }   
    .produto4:hover{
        transform: scale(1.05);
        cursor: pointer;
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
        justify-content: center;
        transition: 0.5s;
    }

    .produto5:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    .produto6{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        justify-content: center;
        border-radius: 8px;
        transition: 0.5s;
    }

    .produto6:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 768px){
        img{
            width: 180px;
            height: 260px;
        }

        h1{
            font-size: 20px;
        }

        height: 40vh;

        .produto4{
                margin: 0 5% 0 5%;
                padding: 20px 0;
                border-radius: 8px;
                
            }
        .produto5{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }
        .produto6{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }

    }

    @media (max-width: 480px){

        height: 20vh;

        h1{

            font-size: 16px;
        }

        h2{

            margin-top: 5px;
            padding: 5px 10px;
            font-size: 14px;
        }

        img{
                width: 90px;
                height: 140px;

            }

        .produto4{
        padding: 10px 10px;

        }   


        .produto5{

            padding: 10px 10px;
        }



        .produto6{
            margin: 0 10% 0 10%;
            padding: 10px 10px;
        }

}

`

export const DesignSect3Loja = styled.section`

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
        border: 0.5px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    .produto1{
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        justify-content: center;
        padding: 20px 0;
        border-radius: 8px;
        transition: 0.5s;
    }

    .produto1:hover{
        transform: scale(1.05);
        cursor: pointer;
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
        justify-content: center;
        transition: 0.4s;
    }

    .produto2:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    .produto3{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        justify-content: center;
        border-radius: 8px;
        transition: 0.4s;

    }

    .produto3:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 768px){
        img{
            width: 180px;
            height: 260px;
        }

        h1{
            font-size: 20px;
        }

        height: 40vh;

        .produto1{
                margin: 0 5% 0 5%;
                padding: 20px 0;
                border-radius: 8px;
                
            }
        .produto2{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }
        .produto3{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }

    }

    @media (max-width: 480px){

height: 20vh;

h1{

    font-size: 16px;
}

h2{

    margin-top: 5px;
    padding: 5px 10px;
    font-size: 14px;
}

img{
        width: 90px;
        height: 140px;

    }

.produto1{
padding: 10px 10px;

}   


.produto2{

    padding: 10px 10px;
}



.produto3{
    margin: 0 10% 0 10%;
    padding: 10px 10px;
}

}

`

export const DesignSect4Loja = styled.section`

    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    height: 70vh;
    margin-bottom: 100px;
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
            border: 0.5px solid rgba(0, 0, 0, 0.2);
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
        justify-content: center;
        transition: 0.5s;
    }   
    .produto4:hover{
        transform: scale(1.05);
        cursor: pointer;
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
        justify-content: center;
        transition: 0.5s;
    }

    .produto5:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    .produto6{
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        margin: 0 10% 0 10%;
        padding: 20px 0;
        justify-content: center;
        border-radius: 8px;
        transition: 0.5s;
    }

    .produto6:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 768px){
        img{
            width: 180px;
            height: 260px;
        }

        h1{
            font-size: 20px;
        }

        height: 40vh;

        .produto4{
                margin: 0 5% 0 5%;
                padding: 20px 0;
                border-radius: 8px;
                
            }
        .produto5{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }
        .produto6{
            margin: 0 5% 0 5%;
            padding: 20px 0;
            border-radius: 8px;
                
            }

    }

    @media (max-width: 480px){

        height: 20vh;

        h1{

            font-size: 16px;
        }

        h2{

            margin-top: 5px;
            padding: 5px 10px;
            font-size: 14px;
        }

        img{
                width: 90px;
                height: 140px;

            }

        .produto4{
           padding: 10px 0;

        }   


        .produto5{

            padding: 10px 10px;
        }

        .produto5:hover{
            transform: scale(1.05);
            cursor: pointer;
        }

        .produto6{
            margin: 0 10% 0 10%;
            padding: 10px 0;
        }

    }

`

