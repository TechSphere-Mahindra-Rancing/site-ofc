import styled from "styled-components";

export const MainStyled = styled.main`

    width: 100%;
    min-height: 100vh;
    background: linear-gradient(90deg, #BB3737 0%, #003E8E 100%);
    overflow: auto;
    display: flex;
    align-items: start;
    justify-content: center;

    .menu {
        margin-left: 36px;
    }

    .container {
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
        min-height: 90vh;
        background-color: #fff;
        border-radius: 24px;
    }

    /* Weather CSS */

    .weather {
        height: fit-content;
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

    @media (max-width: 750px) {
        
        flex-direction: column;

        .container {
            width: 100vw;
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        .menu {
            margin-left: 0;
        }

        .weather {
        }
    }


`