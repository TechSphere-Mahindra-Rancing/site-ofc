import styled from "styled-components";

export const DesignCadastroMain = styled.main`
  background-color: #f0f0f0;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesingSect1Cadastro = styled.section`
  .cadastro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .titulo-cadastro {
    font-size: 35px;
    color: #e61631;
  }

  .cadastroprofile-container {
    width: 450px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #cf1818;
    border-radius: 20px;
    margin-top: 30px;
  }

  .imagem-cadastro {
    border-radius: 100px;
    background: #c8c8c8;
    width: 150px;
    height: 150px;
    padding: 10px;
  }

  .perfil-formcadastro {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  input {
    width: 300px;
    padding: 5px;
    height: 50px;
    margin: 10px 5px;
    border: solid 1px #fb9191;
    border-radius: 5px;
  }

  .btn-cadastro {
    width: 150px;
    height: 60px;
    border-radius: 10px;
    background: #d52b1e;
    color: white;
    cursor: pointer;
  }

  .btn-cadastro:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .cadastroprofile-container {
      width: 350px;
      height: 500px;
    }

    .titulo-cadastro {
      font-size: 28px;
    }

    input {
      width: 250px;
      height: 45px;
    }

    .btn-cadastro {
      width: 120px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    .cadastroprofile-container {
      width: 300px;
      height: 450px;
    }

    .titulo-cadastro {
      font-size: 24px;
    }

    input {
      width: 220px;
      height: 40px;
    }

    .btn-cadastro {
      width: 100px;
      height: 45px;
    }
  }
`;
