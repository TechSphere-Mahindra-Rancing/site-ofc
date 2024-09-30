import { DesignPiloto } from "./stylePilotos";
import Piloto1 from "../../../public/piloto1.png"
import Piloto2 from "../../../public/piloto2.png"

export default function MainPiloto(){
    return(
        <DesignPiloto>
            <h1 id="titulo">Conheça os Pilotos</h1>
            <div className="piloto1">
                <img src={Piloto1} alt="imagem de edoardo mortada piloto de formula e da mahindra" />
                <div className="paragrafo1">
                    <h1>EDOARDO MORTADA</h1>
                    <p>Edoardo Mortara, nascido em 12 de janeiro de 1987 em Genebra, Suíça, é um piloto suíço-italiano que construiu uma carreira impressionante no automobilismo, especialmente em corridas de rua e na Fórmula E. Ele começou sua trajetória nas corridas em 2006, no campeonato de Fórmula Renault, antes de avançar para a Fórmula 3 Euro Series, onde venceu o famoso Grande Prêmio de Macau duas vezes consecutivas, em 2009 e 2010.</p>
                    <p>Mortara também competiu no Campeonato Alemão de Turismo (DTM) entre 2011 e 2017, onde teve destaque, chegando ao vice-campeonato em 2016. Em 2017, ele fez sua estreia na Fórmula E pela equipe Venturi, conquistando seu primeiro pódio logo no seu segundo fim de semana de corrida. Ele alcançou sua primeira vitória na Fórmula E em 2019, no E-Prix de Hong Kong.</p>
                    <p>Sua carreira na Fórmula E é marcada por altos e baixos, mas ele teve uma temporada notável em 2021, quando foi vice-campeão mundial, perdendo o título por apenas sete pontos. Em 2023, após uma temporada difícil com a equipe Maserati, ele se transferiu para a Mahindra Racing, buscando novos desafios para a temporada de 2024</p>
                </div>     
            </div>
            <div className="piloto2">
                <img src={Piloto2} alt="imagem de nyck de vries piloto de formula e da mahindra " />
                <div className="paragrafo2">
                    <h1>NYCK DE VRIES</h1>
                    <p>Nyck de Vries é um piloto holandês nascido em Sneek, em 6 de fevereiro de 1995. Ele ganhou destaque em várias categorias de automobilismo antes de conquistar o título de campeão da Fórmula 2 em 2019 e, posteriormente, se aventurar na Fórmula E e na Fórmula 1.</p>
                    <p>De Vries começou sua carreira em karting, onde teve bastante sucesso. Em 2014, ele venceu o Eurocup Formula Renault 2.0 e o campeonato Formula Renault 2.0 Alps. Após isso, continuou sua ascensão nas categorias de base, como GP3 e Fórmula 2. Ele se destacou especialmente em 2019, quando venceu o campeonato de Fórmula 2 com a equipe ART Grand Prix. </p>
                    <p>Sua estreia na Fórmula E ocorreu em 2019 pela Mercedes EQ Formula E Team, e ele logo mostrou talento, tornando-se campeão mundial na temporada 2020-2021. Após esse sucesso, de Vries tentou a sorte na Fórmula 1 como piloto reserva da Mercedes e depois competiu pela AlphaTauri em 2023. Contudo, sua passagem pela F1 foi curta, e ele voltou à Fórmula E em 2024 pela Mahindra Racing, trazendo a experiência de campeão mundial.</p>
                    <p>Nyck de Vries tem um estilo de pilotagem eficiente e pragmático, sempre focado em melhorar o desempenho das equipes pelas quais corre.</p>
                </div>
            </div>

        </DesignPiloto>
    )
}