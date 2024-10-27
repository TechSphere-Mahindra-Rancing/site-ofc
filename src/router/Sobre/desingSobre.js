import styled from "styled-components";

export const DesingMainSobre = styled.main`

    overflow: auto;

    .container {
        padding: 2% 5%;
        display: flex;
        flex-direction: column;
        background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    }

    .section {
        margin-bottom: 36px;
    }

    .title-box{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        color: #fff;
    }

    .subtitle-box{
        font-size: 20px;
        font-weight: 600;
        padding: 12px 0 8px;
        color: #fff;
    }

    .paragraf {
        padding: 16px 0;
        color: #fff;
    }

    .diviser {
        border: 2px solid #fff;
        width: 20%;
        align-items: center;
        margin-top: 12px;
    }

    .value-mission {
        display: flex;
        justify-content: space-between;
        margin: 0 10%;
    }

    .value-mission .title-box {
        align-items: center;
        padding-bottom: 24px;
    }

    .value-mission .diviser {
        width: 70%;
    }

    .section-box{
        margin-bottom: 50px;
    }

    .box {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
        width: 400px;
        min-height: 200px;
        padding: 24px;
        border-radius: 24px;
        color: #fff;
        
        ul {
            gap: 30px;
        }

        ul li {
            padding: 12px 0;
            text-align: center;
            list-style: none;
        }
    }

    .mensage {
        text-align: center;
        color: #fff;
    }

    .mensage .mensage-title, .mensage-subtitle {
        padding-bottom: 24px;
    }

    .mensage .mensage-subtitle{
        font-weight: 500;
    }
    
    .equipe{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 100px;
    }

    .equipe .subtitle-box {
        padding-bottom: 24px;
    }

    .btn-ver-mais {
        text-align: center;

        button {
            background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
            border: none;
            border-radius: 24px;
            padding: 8px 16px;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
            transition:0.5s ease;
        }
    }

    .btn-ver-mais button:hover{
        background: linear-gradient(90deg, rgba(187, 55, 55, 0.5) 0%, rgba(0, 62, 142, 0.5) 100%);
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03); 
    }

    .negrito{
        font-weight: 700;
    }

    .container-members {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .members-content{
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
        border-radius: 24px;
        padding: 24px;
        color: #fff;

        img{
            width: 200px;
            height: auto;
        }
    }

    .members-content .member{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 600;

    }

    .member .nome {
        font: 24px;
    }

    .about .paragraf{
        padding-bottom: 20px;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content {
        background: #fff;
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
        padding: 24px;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        text-align: center;
        align-items: center;
        color: black;

        h3{
            color: #003E8E;
            font-size: 20px;
        }

        p {
            color: #BB3737;
            font-size: 18px;
        }
    }

    .modal-content ul {
        display: flex;
        justify-content: center;
        gap: 24px;
        padding: 25px 0 50px;

        li {
            list-style: none;
        }

        li a{
            text-decoration: none;

        }
    }

    .modal-content button{
        background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
        border: none;
        border-radius: 24px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition:0.5s ease;
    }

    .modal-content button:hover{
        background: linear-gradient(90deg, rgba(187, 55, 55, 0.5) 0%, rgba(0, 62, 142, 0.5) 100%);
        color: rgba(255, 255, 255, 0.5);
        transform: scale(1.03); 
    }

    .container-redes .icon-rede{
        font-size: 40px;
        color: #003E8E;
        transition: 0.5s ease;
        cursor: pointer;
    }

    .container-redes .icon-rede:hover{
        color: rgba(0, 62, 142, 0.5);
        transform: scale(1.03);
    }

    @media (max-width: 750px) {

    .section {
        margin-bottom: 18px;
        align-items: center;
        text-align: center;
    }

    .title-box{
        align-items: center;
    }

    .paragraf {
        font-size: 18px;
    }

    .diviser {
        width: 50%;
        align-items: center;
    }

    .value-mission {
        flex-direction: column;
    }

    .box {
        width: 300px;
    }

    .mensage .mensage-subtitle {
        font-size: 24px;
    }
    
    .members-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
            width: 150px;
            height: auto;
        }
    }

    .equipe {
        margin-bottom: 70px;
    }

    .equipe .diviser{
        width: 200px;
    }

    .membro-equipe {
        display: flex;
        justify-content: center;
    }

    .btn-ver-mais button {
        font-size: 18px;
        font-weight: 500;
    }

    .modal-content {
        max-width: 300px;
    }

    .modal-content ul {
        gap: 14px;
        }
    }

    .modal-content button{
        font-size: 18px;
        font-weight: 500;
    }

    .container-redes .icon-rede{
        font-size: 45px;
    }

`
