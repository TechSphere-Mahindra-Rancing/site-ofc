import { DesignSect1Noticias } from "./styleNoticias";
import FotoNoticia1 from "../../../public/carro1-noticias.jpeg"
import FotoNoticia2 from "../../../public/not2-noticias.jpeg"
import FotoNoticia3 from "../../../public/carro3-noticias.jpeg"

export default function Sect1Noticias(){
    return(
        <DesignSect1Noticias>
            <div className="not1">
                <img src={FotoNoticia1} alt="foto de um carro de formula e da mahindra" />
                <div className="infos1">
                    <h1>Carros Elétricos Mahindra Racing</h1>
                    <p>Os carros elétricos da Mahindra Racing lideram na Fórmula E, combinando tecnologia avançada, desempenho excepcional e sustentabilidade ambiental.         </p>
                </div>
            </div>
            <div className="container-noticia">
                <div className="not2"> 
                    <img src={FotoNoticia2} alt="foto de um campeão de formula e comemorando a sua vitória " />
                    <div className="infos2">
                        <h1>Resultados Finais</h1>
                        <p>Confira agora o placar final da Fórmula E 2024.</p>
                    </div>
                </div>
                <div className="not3">
                    <img src={FotoNoticia3} alt="foto de um carro de formula e em uma corrida" />
                    <div className="infos3">
                        <h1>Velocidade VERDE</h1>
                        <p>A Fórmula E promove a sustentabilidade com corridas de carros elétricos.</p>
                    </div>
                </div>
            </div>    
        </DesignSect1Noticias>
    )
}