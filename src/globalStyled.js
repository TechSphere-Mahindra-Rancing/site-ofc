import { createGlobalStyle } from "styled-components";



const EstiloGlobal = createGlobalStyle `

    @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui;
  }

  :root{
    --main-letras: #001734;
  }

  body {
    
  }

    
`;




export default EstiloGlobal