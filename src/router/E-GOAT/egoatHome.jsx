import { DesignEgoatMain } from "./styleEgoat"; 
import pilotoImagem from "../../../public/imagemPilotoegoat.png";
import pilotoEquipeImagem from "../../../public/equipePiloto.png";


export default function Sect1Egoat() {
    return (
        <DesignEgoatMain>
            <section className="desempenho">
                <h1>Seu desempenho</h1>
                <div className="estatisticas">
                    <div className="estatistica-item">
                        <h2>Você possui <span className="highlight-red">4</span> vitórias</h2>
                    </div>
                    <div className="estatistica-item">
                        <h2>Você possui <span className="highlight-red">0</span> derrotas</h2>
                    </div>
                </div>
            </section>
            
            <section className="position-actualBet-container">
                <section className="position">
                    <h2>Sua posição atual</h2>
                    <div className="position-content">
                        <h2>Você já ganhou <span className="highlight-red">45</span> <span className="highlight-red">pontos</span></h2>
                        <div className="podium">
                            {/* Conteúdo do pódio, se necessário */}
                        </div>
                    </div>
                </section>
                
                <section className="actualBet">
                    <h2>Aposta Atual</h2>
                    <div className="container-bet">
                        <div className="piloto">
                            <img src={pilotoImagem} alt="Imagem do Piloto"/>
                            <h2>Jake Dennis</h2>
                        </div>
                        <div className="piloto-info">
                            <h2>Equipe:</h2>
                            <img src={pilotoEquipeImagem} alt="Logo da Equipe" />
                            <h2>Posição Inicial:</h2>
                            <p>3º lugar</p>
                            <h2>Posição Atual:</h2>
                            <p>6º lugar</p>
                        </div>
                    </div>
                </section>
            </section>
        </DesignEgoatMain>
    );
}
