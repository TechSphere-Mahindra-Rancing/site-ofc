import { DesignSect1Noticias } from "./styleNoticias";
import FotoNoticia1 from "../../../public/carro1-noticias.jpeg";
import FotoNoticia2 from "../../../public/not2-noticias.jpeg";
import FotoNoticia3 from "../../../public/carro3-noticias.jpeg";
import { useNavigate } from 'react-router-dom'; // Para redirecionar

export default function Sect1Noticias() {
    const navigate = useNavigate(); // Hook para redirecionamento

    const handleNoticia1Click = () => {
        navigate('/noticia1'); // Redireciona para a página Noticia1
    };

    const handleNoticia2Click = () => {
        navigate('/noticia2'); // Redireciona para a página Noticia2
    };

    return (
        <DesignSect1Noticias>
            {/* <div className="not1">
                <img 
                    src={FotoNoticia1} 
                    alt="foto de um carro de formula e da mahindra" 
                    onClick={handleNoticia1Click} // Adiciona o evento de clique na imagem
                    style={{ cursor: 'pointer' }} // Estiliza o cursor para indicar que é clicável
                />
                <div className="infos1">
                    <h1>CARROS ELÉTRICOS MAHINDRA RACING</h1>
                    <p>Os carros elétricos da Mahindra Racing lideram na Fórmula E, combinando tecnologia avançada, desempenho excepcional e sustentabilidade ambiental.</p>
                </div>
            </div>

            <div className="container-noticia">
                <div className="not2"> 
                    <img 
                        src={FotoNoticia2} 
                        alt="foto de um campeão de formula e comemorando a sua vitória" 
                        onClick={handleNoticia2Click} // Adiciona o evento de clique na imagem
                        style={{ cursor: 'pointer' }} // Estiliza o cursor para indicar que é clicável
                    />
                    <div className="infos2">
                        <h1>RESULTADOS FINAIS</h1>
                        <p>Confira agora o placar final da Fórmula E 2024.</p>
                    </div>
                </div>
                <div className="not2">
                    <img 
                        src={FotoNoticia3} 
                        alt="foto de um carro de formula e em uma corrida" 
                        onClick={handleNoticia2Click} // Exemplo: também redireciona para Noticia2
                        style={{ cursor: 'pointer' }} // Estiliza o cursor para indicar que é clicável
                    />
                    <div className="infos2">
                        <h1>VELOCIDADE VERDE</h1>
                        <p>A Fórmula E promove a sustentabilidade com corridas de carros elétricos.</p>
                    </div>
                </div>
            </div> */}

            <div className="not1"></div>
            <div className="not2"></div>
            <div className="not3"></div>
            <div className="not4"></div>
            <div className="not5"></div>
            <div className="not6"></div>
            <div className="not7"></div>
            <div className="not8"></div>
        </DesignSect1Noticias>
    );
}
