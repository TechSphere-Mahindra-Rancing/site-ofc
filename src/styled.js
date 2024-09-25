import styled from "styled-components";

export const DesignHeader = styled.header`
    margin: 0;
`

export const DesignFooter = styled.footer`
    margin: 0;
    background-color: yellowgreen;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 0.5fr 1.4fr 0.3fr;
    width: 100%;
    height: 40vh;
    

    #sobre { grid-area: 1 / 1 / 2 / 2;
    background-color: yellow;
    text-align: center;
    padding-top: 2%;
    color: white;
    font-weight: 300;
    }

    #redes{ grid-area: 1 / 2 / 2 / 3;
    background-color: blue;
    text-align: center;
    padding-top: 2%;
    color: white;
    font-weight: 300;
    }

    #feedback{ grid-area: 1 / 3 / 2 / 4;
    background-color: bisque;
    text-align: center;
    padding-top: 2%;
    color: white;
    font-weight: 300;
    }

    .sobre-div { 
    grid-area: 2 / 1 / 3 / 2; 
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .sobre-div ul li{
        list-style-type: none;
    }

    .sobre-div a{
        text-decoration: none;
        font-size: 20px;
        color: white;
    }

    .redes-div { grid-area: 2 / 2 / 3 / 3; 
    background-color: azure;
    }

    .feedback-div { grid-area: 2 / 3 / 3 / 4;
    background-color: blueviolet;
    }

    .direitos-div { grid-area: 3 / 1 / 4 / 4;
    background-color: aquamarine;
    }
`