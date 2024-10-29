import styled from "styled-components";

export const MainStyled = styled.main`

    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu {
        margin-left: 36px;
    }

    .container {
        width: 80vw;
        min-height: 90vh;
        background-color: #fff;
        border-radius: 24px;
    }

    /* Weather CSS */

    .weather {
        min-height: 90vh;
        margin-top: 9%;
        border-top-right-radius: 24px;
        border-top-left-radius: 24px;
    }

    .chart-section {
        width: 80vw;
        height: 90vh;
        margin: 0 auto;
        padding: 0 20px 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .chart-section h1, .chart-section h2 {
        margin: 10px 0; 
    }


`