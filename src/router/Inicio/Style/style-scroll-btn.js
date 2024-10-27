import styled from "styled-components"

export const StyleScroll = styled.div`

.scroll-icon-container {
    position: fixed;
    bottom: 20px; /* Ajuste conforme necessário */
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInOut 2s infinite; /* Animação de fade in e out */
}
  
.scroll-icon {
    font-size: 50px; /* Ajuste o tamanho do ícone conforme necessário */
    color: #031669; /* Cor do ícone */
    animation: moveDown 2s infinite; /* Animação de movimento */
    cursor: pointer;
}
  
@keyframes moveDown {
    0% {
      transform: translateY(0); /* Começo */
    }
    50% {
      transform: translateY(20px); /* Desce */
    }
    100% {
      transform: translateY(0); /* Volta ao início */
    }
}
  
@keyframes fadeInOut {
    0%, 100% {
      opacity: 1; /* Visível */
    }
    50% {
      opacity: 0; /* Invisível */
    }
}
`