import { EgoatHistorico } from "./styleEgoat";

export const Sect2Egoat = () => {
    return (
        <EgoatHistorico>
            <section className="historico">
                <h2 className="titulo-historico">Histórico</h2>
                <div className="container-historico">
                    <div className="historico-bloco">
                        <h3 className="titulo-data">01/02/2025</h3>
                        <div className="texto-hora-container">
                            <p className="texto">Compra de Pontos</p>
                            <p className="hora">13:34:12</p>
                        </div>
                    </div>

                    <div className="historico-bloco">
                        <h3 className="titulo-data">27/01/2025</h3>
                        <div className="texto-hora-container">
                            <p className="texto">Apostou em: Jake Dennis</p>
                            <p className="hora">19:53:08</p>
                        </div>
                        <div className="texto-hora-container">
                            <p className="texto">Ganho de 23 pontos</p>
                            <p className="hora">08:00:00</p>
                        </div>
                    </div>

                    <div className="historico-bloco">
                        <h3 className="titulo-data">01/02/2025</h3>
                        <div className="texto-hora-container">
                            <p className="texto">Ganho de 10 pontos</p>
                            <p className="hora">10:29:42</p>
                        </div>
                    </div>
                </div>
            </section>
        </EgoatHistorico>
    );
};
