import styled from "styled-components";

export const DesignCadastroMain = styled.main`
`;

export const DesingSect1Cadastro = styled.section`
    
    height: 100vh;
    background: linear-gradient(to left, #003e8e, #BB3737);
    overflow: auto;
    display: flex;
    align-items: center;
    
    .principal-square{
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      margin: 0 10%;
      height: 620px;
      
    }

    .criar-conta h1{
      font-size: 40px;
      font-weight: 600;
      color: white;

    }

    .criar-conta{
      width: 160%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 60px;
    }

    .criar-conta button{
      border: none;
      background: rgba(187, 55, 55, 0.5);
      color: white;
      font-size: 20px;
      font-weight: 600;
      padding: 5px 50px;
      border-radius: 24px;
      transition: 0.4s;
    }

    .criar-conta button:hover{
      background: rgba(187, 55, 55, 0.9);
      cursor: pointer;
      color: #D0B9B9FF;
    }



    ::-webkit-input-placeholder{
      color: white;
  
    }

    .form{
      display: flex;
      flex-direction: column;
      
    }

    #data-input{
      width: 183px;
    }

    .email-senha{
      display: flex;
      flex-direction: column;
    }

    .form input{
      border: none;
      margin: 5px;
      background-color: rgba(255, 255, 255, 0.5);
      color: white;
      min-height: 50px;
      border-radius: 24px;
      padding-left: 20px;

    }

    .bem-vindo{
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 50px;
      align-items: end;
      padding-right: 40px;
    }

  

    .bem-vindo h1{
      color: #003E8E;
      font-size: 45px;
      font-weight: 600;
      margin-top: 100px;
    }

    .bem-vindo hr{
      border: 2px solid #003E8E;
      width: 100px;
      
    }

    .bem-vindo p{
      color: #003E8E;
      font-size: 20px;
      font-weight: 600;
      text-align: end;
    }

    .bem-vindo button{
      border: none;
      background: linear-gradient(90deg, #BB3737 0%, #5E3B63 39.5%, #2F3C78 72.5%, #003E8E 100%);
      color: white;
      font-size: 20px;
      font-weight: 600;
      padding: 5px 50px;
      border-radius: 24px;
      transition: 0.4s;
    }

    .bem-vindo button:hover{
      cursor: pointer;
      background: linear-gradient(90deg, #BB3737D1 0%, #5E3B63D1 39.5%, #2F3C78CE 72.5%, #003E8ECE 100%);
    }
`
