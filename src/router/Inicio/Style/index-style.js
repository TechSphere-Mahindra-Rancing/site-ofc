import styled from "styled-components";

export const InicioStyle = styled.main`

   width: 100%;
   display: flex;
   flex-direction: column;
   flex: grow;
   background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
   color: white;

   .section {
    margin: 0 5%;
   }

   .banner-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2%;
   }

   .banner-text{
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    h1{
        font-size: 32px;
    }

    h3{
        font-weight: 500;
    }
   }

   .negrito {
        font-weight: 600;
    }

   .diviser {
    border: 2px solid #fff;
    margin: 5% 0;
   }

   .banner-diviser{
    margin: 0;
    width: 40%;
   }

   .btn-default{
        padding: 8px 16px;
        background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
        border: none;
        border-radius: 20px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        transition: background 0.5s ease, color 0.5s ease; /* Transições de background e cor */
        cursor: pointer;
   }

   .btn-default-center{
    width: 50%;
    margin: 0 auto;
   }

   .btn-default:hover{
        background: linear-gradient(90deg, rgba(187, 55, 55, 0.5) 0%, rgba(0, 62, 142, 0.5) 100%);
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03);
   }

   .scroll-icon-container {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
   }

   /* Sections Conteudo */
   .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;

    h1{
        font-size: 28px;
        padding: 0;
    }

    h2 {
        font-size: 22px;
        padding-top: 20px;
    }

    h3, h4{
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 24px;
    }

    p {
        font-size: 14px;
        text-align: start;
        padding-bottom: 24px;
    }

  }

  .bloco-background{
    display: flex;
    justify-content: center;
    gap: 50px;
  }

  .bloco-content {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
    height: 300px;
    margin: 24px;
    padding: 24px;
    border-radius: 24px;
    text-align: center;

    h3{
        font-size: 24px;
        font-weight: 500;
    }

  }

  .bloco-content-fe {
    display: flex;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: fit-content;
    margin-bottom: 36px;
    padding: 24px;
    border-radius: 24px;
    text-align: center;

    h3{
        font-size: 24px;
        font-weight: 500;
    }

  }

  .animacao{
    margin-top: 24px;
  }

  .container-bloco {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 24px 0;
  }

  .bloco{
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 200px;
    border-radius: 100%;
    padding: 24px;
  }

  .avaliacoes-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 100px;
    gap: 24px;
    }

    .avaliacoes-container .avaliacoes-title{
        font-size: 30px;
        color: #fff;
    }

    .depoimento-content {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 70%;
        min-height: 80px;
        gap: 20px;
        padding: 20px;
        margin: 0 auto 24px; /* Centraliza horizontalmente */
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    }

    .depoimento-avatar{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        object-fit: cover;
    }

    .depoimento-content p{
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        span {
            color: #3778CC;
            font-size: 24px;
        }

        .nome{
            font-size: 20px;
            color: #1E1E1E;
            font-weight: 600;
        }
    }

    @media (max-width: 750px) {
    .section {
        margin: 0 2%;
    }

    .banner-container{
        flex-direction: column;
        padding: 10% 5% 5%;
    }

    .banner-text{
        align-items: center;
        text-align: center;
        
        h1{
            font-size: 20px;
        }

        h3{
            font-size: 16px;
        }
    }

    .banner-image img {
        width: 300px;
        padding: 24px 0;
    }

    .banner-diviser{
        width: 65%;
    }

    .btn-default{
        padding: 4px 8px;
        margin: 24px 0;
        border-radius: 16px;
        font-size: 16px;
        font-weight: 500;
    }

    /* Sections Conteudo */
    .content-section {
        padding: 5%;
        gap: 14px;

        h1{
            font-size: 22px;
        }

        h2 {
            font-size: 20px;
        }

        h3, h4{
            font-size: 20px;
            padding-bottom: 18px;
        }

        p {
            font-size: 16px;
            text-align: center;
            padding-bottom: 18px;
        }

    }

    .bloco-background{
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding-bottom: 24px;
    }

    .bloco-content {
        width: 90%;
        justify-content: center;
        margin: 0 5%;
        padding: 24px;

        h3{
            font-size: 20px;
        }

    }

    .bloco-content-fe {
        width: 90%;
        margin: 0 auto;
        margin-top: 24px;

        h3{
            font-size: 20px;
        }

    }

    .animacao{
        display: none;
    }

    .container-bloco {
        flex-direction: column;
    }

    .avaliacoes-container{
        padding: 0 0 24px;
        }

        .avaliacoes-container .avaliacoes-title{
            font-size: 20px;
        }

        .depoimento-content {
            flex-direction: column;
            padding: 24px;
        }

        .depoimento-content p{
            flex-direction: column;
            font-size: 16px;
            text-align: center;

            span {
                font-size: 16px;
            }

            .nome{
                font-size: 16px;
            }
        }
    }
`