import styled from "styled-components";

export const DesignEgoatMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* Títulos principais */
    .desempenho h1,
    .position h2,
    .actualBet h2 {
        color: #BB3737;
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    /* Background e estilo para os blocos de estatísticas */
    .estatisticas {
        display: flex;
        gap: 10px;
    }

    .estatistica-item {
        flex: 1;
        background: #D9D9D980;
        color: #003E8E;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        height: 80px;  /* Altura mais curta */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .estatistica-item .highlight-red {
        color: #BB3737;
    }

    /* Container da posição e aposta atual */
    .position-actualBet-container {
        display: flex;
        gap: 20px;
    }

    .position, .actualBet {
        flex: 1;
    }

    /* Bloco de posição com dimensões especificadas */
    .position-content {
        background: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
        height: 100px;  /* Altura curta */
    }

    .position-content h2 {
        color: #003E8E;
    }

    .position-content .highlight-red {
        color: #BB3737;
    }

    /* Container de Aposta Atual com altura e largura maiores */
    .container-bet {
        background: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 20px;
        height: 300px;  /* Altura ajustada */
    }

    .piloto {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;  /* Largura maior */
        text-align: center;
    }

    .piloto img {
        width: 200px;
        height: 180px;
        border-radius: 50%;
        margin-bottom: 5px;
    }

    .piloto-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .piloto-info h2 {
        color: #003E8E;
        font-weight: bold;
    }

    .piloto-info img{
        width: 100px;
        height: 40px;
        border-radius: 20px;
    }

    .piloto-info p {
        margin: 0;
        padding: 5px;
        color: #BB3737;
        font-weight: bold;
        background: #D9D9D980;
        border-radius: 5px;
    }

    /* Ajustes responsivos para telas menores */
    @media (max-width: 768px) {
        .position-actualBet-container {
            flex-direction: column;
        }
    }
`;

export const EgoatHistorico = main.styled`

    .historico{
        display: flex;

    }

    .titulo-historico,
    .titulo-data {
        color: #BB3737;
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .texto{
        background: #003E8E;

    }

    .hora{
        font-size: 25px;
        background: #003E8EB2;

    }

`
