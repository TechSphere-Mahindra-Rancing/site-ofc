import styled from "styled-components"

export const StyledFooter = styled.footer`

    width: 100%;
    min-height: 8vh;
    background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2% 15%;
    }

    .section{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .title-section{
        color: #fff;
        font-weight: 500;
        font-size: 18px;
        padding-bottom: 16px;
    }

    .members-container{
        display: flex;
        flex-direction: column;
        gap: 8px;

        a{
            text-decoration: none;
            color: #fff;
            transition: 0.5s ease; 
        }

        a li{
            list-style: none;
        }
    }

    .members-container a:hover{
        padding-bottom: 0;
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03);
    }

    .redes-container{
        display: flex;
        justify-content: center;
        gap: 24px;

        a{
            text-decoration: none;
            color: #fff;
            transition: 0.5s ease; 
        }

        a li{
            list-style: none;
        }
    }

    .redes-container .icon-rede{
        font-size: 35px;
    }

    .redes-container a:hover{
        padding-bottom: 0;
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03);
    }

    .form-container{
        display: flex;
        flex-direction: column;
        gap: 12px;

        input{
            width: 100%;
            padding: 5px 7px;
            border-radius: 24px;
            border: 1px solid #ccc;
            background: rgba(255, 255, 255, 0.5);
            border: none;
            color: #585858;
            outline: none;
            font-weight: 600;
        }
    }

    .btn{
        padding: 8px;
        background: #BB3737;
        color: #fff;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        transition: background 0.5s ease, color 0.5s ease; /* Transições no botão de form */
    }

    .btn:hover{
        background: rgba(187, 55, 55, 0.5);
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03); 
    }

    .section-direitos{
        justify-content: center;
        text-align: center;
        font-size: 12px;
        color: #fff;

        hr {
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        p{
            padding: 8px 0;
        }
    }

    @media (max-width: 750px) {

        .content {
            flex-direction: column;
            
        }

        .section{
            padding: 24px;
        }

        .title-section{
            font-size: 14px;
            padding-bottom: 14px;
        }

        .members-container{
            flex-direction: row;
            gap: 20px;

            a{
                font-size: 12px;
            }
        }

        .redes-container .icon-rede{
            font-size: 30px;
        }

        .form-container{
            display: flex;
            flex-direction: column;
            gap: 10px;

            input{
                padding: 4px 8px;
            }
        }

        .btn{
            padding: 4px;
        }

        .section-direitos{
            font-size: 10px;

            p{
                padding: 5px 0;
            }
        }
        
    }
` 