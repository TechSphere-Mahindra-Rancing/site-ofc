import { DesingNoticia1 } from "./styleNoticias";
import Not1 from "../../../public/noticias1-imagem.jpeg"
import Not2 from "../../../public/noticia2-imagen.jpeg"
import Not3 from "../../../public/noticia3-imagem.jpeg"
// import Not4 from "../../../public/noticia4-imagem.jpeg"
// import Not5 from "../../../public/noticia5-imagem.png"


export default function Noticia1(){
    return(
        <DesingNoticia1>
            <h1 id="titulo-principal">Carros Elétricos Mahindra Racing</h1>
            <div className="noticia1">
                <div className="paragrafo1">
                    <h1>Tecnologia de Ponta e Desempenho Excepcional</h1>
                    <p>Os carros elétricos da Mahindra Racing são equipados com baterias de íon-lítio de última geração, que garantem uma eficiência energética sem precedentes. Esses veículos aproveitam ao máximo cada carga de bateria, permitindo uma performance de alta intensidade durante as corridas. O sistema de regeneração de energia, uma característica essencial, captura a energia durante as frenagens e a reutiliza, aumentando a autonomia dos carros e melhorando a eficiência geral.</p>
                </div>
                <img src={Not1} alt="imagem de um carro ofrmula e mahindra em uma corrida" />
            </div>
            <div className="noticia2">
                <div className="paragrafo2">
                    <h1>Aerodinâmica e Controle Superior</h1>
                    <p>A Mahindra Racing investe significativamente em pesquisa e desenvolvimento para otimizar a aerodinâmica de seus carros. A forma dos veículos é projetada para reduzir a resistência ao ar, aumentando a velocidade e a estabilidade. Além disso, os carros são equipados com controles de tração avançados que garantem agilidade e segurança nas pistas desafiadoras da Fórmula E. Esses sistemas permitem que os pilotos mantenham o controle em curvas fechadas e durante mudanças abruptas de direção, proporcionando uma experiência de corrida mais segura e emocionante. </p>
                </div>

            </div>
            <div className="noticia3">
                <img src={Not2} alt="imagem de um a]carro mahindra estacionando em uma pista de corrida" />
                <div className="paragrafo3">
                    <h1>Inovação Contínua</h1>
                    <p>A Mahindra Racing se orgulha de sua capacidade de inovação contínua. A equipe está constantemente explorando novas tecnologias e metodologias para melhorar o desempenho de seus carros. Seja através de melhorias na eficiência das baterias, avanços na aerodinâmica ou a implementação de sistemas de inteligência artificial para otimização de corrida, a Mahindra está sempre na busca de soluções que mantenham seus veículos na liderança da Fórmula E.</p>
                </div>
            </div>
            <div className="noticia4">
                <div className="paragrafo4">
                    <h1>Impacto na Indústria Automotiva</h1>
                    <p>Os avanços tecnológicos desenvolvidos pela Mahindra Racing na Fórmula E têm repercussões que vão além das pistas de corrida. Muitas das inovações e tecnologias testadas e refinadas durante as competições são posteriormente aplicadas nos veículos de produção em massa da Mahindra. Isso não só melhora a performance e a eficiência dos carros elétricos disponíveis no mercado, mas também acelera a adoção de veículos elétricos em todo o mundo.</p>
                </div>
                <img src={Not3} alt="carro de corrida formula e em uma corrida" />
            </div>
            <div className="noticia5">
                <h1>Sustentabilidade Ambiental</h1>
                <p>Um dos principais pilares da Mahindra Racing é a sustentabilidade. Os carros elétricos da equipe são totalmente isentos de emissões de escape, contribuindo para a redução da poluição atmosférica. A Mahindra Racing não apenas compete em corridas, mas também promove uma mensagem de consciência ambiental e a importância de uma transição para tecnologias mais limpas. Este compromisso com a sustentabilidade reflete a visão da empresa de um futuro mais verde e tecnológico.</p>
            </div>
        </DesingNoticia1>
    )
}