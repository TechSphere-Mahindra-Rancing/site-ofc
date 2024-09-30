import styled from "styled-components";

export const DesignPerfilMain = styled.main`
  background-color: #f0f0f0;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesingSect1Perfil = styled.section`
  .perfil-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .perfil-imagem {
    border-radius: 100px;
    background-color: #fb9191;
    width: 150px;
    height: 150px;
    padding: 10px;
  }

  .perfil-form {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
  }

  input {
    width: 400px;
    height: 50px;
    margin: 20px 5px;
    border: solid 1px #fb9191;
  }

  .perfil-input-extra {
    width: 800px;
    height: 300px;
  }

  @media (max-width: 768px) {
    .perfil-form {
      margin-left: 30px;
    }

    input {
      width: 300px;
      height: 45px;
    }

    .perfil-input-extra {
      width: 500px;
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    .perfil-container {
      flex-direction: column;
    }

    input {
      width: 250px;
      height: 40px;
    }

    .perfil-input-extra {
      width: 400px;
      height: 200px;
    }
  }
`;
