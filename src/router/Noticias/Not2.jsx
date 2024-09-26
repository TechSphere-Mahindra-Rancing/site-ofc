import { DesignNoticia2 } from "./styleNoticias";
import Img1 from "../../../public/not2-noticias.jpeg"
import Img2 from "../../../public/piloto-saltando-carro.jpeg"
import Img3 from "../../../public/imagem-not2-principais.jpeg"
import Img4 from "../../../public/imagem2-not2-principal.jpeg"

export default function Noticia2(){
    return(
        <DesignNoticia2>
             <h1 id="titulo-principal">Resultados Finais
             2023</h1>
             <div className="paragrafo-inicial">
                <p>A temporada 2023 da Fórmula E foi bastante disputada e cheia de emoção. O campeonato viu Jake Dennis, da equipe Avalanche Andretti, conquistar o título de pilotos. Ele se destacou ao longo da temporada, acumulando pontos suficientes para superar seus concorrentes. Em segundo lugar ficou Nick Cassidy, da Envision Racing, que também teve uma temporada forte, mas não conseguiu superar Dennis no final. O terceiro lugar foi ocupado por Mitch Evans, da Jaguar TCS Racing.</p>
             </div>
             <div className="noticia1">
                <img src={Img1} alt="foto de um campeão de formula e comemorando a sua vitória" />
                <div className="paragrafo1">
                    <h1>Jake Dennis assegura o Título do Campeonato de Fórmula E de 2023</h1>
                    <p>Numa conclusão emocionante da temporada de Fórmula E de 2023, Jake Dennis, pilotando pela equipe Andretti, emergiu como o Campeão Mundial. Esta vitória histórica marca Dennis como o primeiro piloto britânico a conquistar o título de campeão na série de corridas totalmente elétricas.</p>
                </div>
             </div>
             <div className="noticia2">
                <h1>Jornada e Reação de Dennis</h1>
                <p>A jornada de Jake Dennis rumo ao campeonato foi marcada por altas performances consistentes e perspicácia estratégica. Refletindo sobre sua vitória, Dennis expressou um orgulho imenso e gratidão para com sua equipe, reconhecendo o trabalho árduo e a dedicação que levaram ao sucesso deles. Sua reação emocional destacou a importância deste feito tanto para si mesmo quanto para a equipe Andretti .</p>
             </div>
             <h1 id="titulo-secundario">Principais Momentos da Corrida</h1>
             <div className="noticia3">
                <img src={Img2} alt="imagem de um piloto pulando perto de um carro formula e em uma pista de corrida"/>
                <div className="paragrafo3"> 
                    <h1>Desempenho Consistente de Dennis</h1>
                    <p>Apesar de não vencer a corrida final, o desempenho consistente de Dennis ao longo da temporada garantiu sua posição no topo. Na corrida final em Londres, Dennis terminou em segundo lugar, o que foi suficiente para garantir sua vitória no campeonato .</p>
                </div>  
                
             </div>
             <div className="noticia4">
                <img src={Img3} alt="imagem de um carro mahindra de formula e" />
                <div className="paragrafo4">
                    <h1>Classificação e Contratempos Iniciais</h1>
                    <p>Nick Cassidy, um dos principais concorrentes ao título, partiu da pole position, mas enfrentou desafios significativos. Uma colisão precoce com seu companheiro de equipe, Sebastien Buemi, danificou seu carro e eventualmente forçou Cassidy a se retirar da corrida, o que afetou drasticamente suas chances de campeonato .</p>
                </div>
             </div>
             <div className="noticia5">
                <img src={Img4} alt="imagem de uma pista de corrida" />
                <div className="paragrafo5">
                    <h1>Desafios Climáticos:</h1>
                    <p>A chuva durante a corrida adicionou uma camada extra de dificuldade, tornando partes da pista escorregadias. Dennis navegou habilmente nessas condições, mantendo sua posição e evitando incidentes graves .</p>
                </div>
             </div>
             <div className="noticia-final">
                <div className="div1-final">
                    <h1>Campeonato de Pilotos</h1>
                    <p>Jake Dennis encerrou a temporada com 229 pontos, seguido por Nick Cassidy com 199 pontos e Mitch Evans logo atrás com 197 pontos .</p>
                </div>
                <div className="div2-final">
                    <h1>Campeonato de Equipes</h1>
                    <p>A Envision Racing conquistou o Campeonato Mundial de Equipes com 304 pontos. A Jaguar TCS Racing ficou em segundo lugar com 292 pontos, e a equipe Andretti, graças ao desempenho estelar de Dennis, garantiu o terceiro lugar com 252 pontos.</p>
                </div>
             </div>
             <p id="paragrafo-final">A temporada de Fórmula E de 2023 mostrou a natureza emocionante e imprevisível do automobilismo elétrico. Com a vitória histórica de Jake Dennis e a intensa competição entre as equipes, esta temporada estabeleceu um alto padrão para emoção e inovação no esporte a motor. Os avanços e elementos estratégicos exibidos ao longo do campeonato continuam a destacar o papel da Fórmula E em empurrar os limites da tecnologia de veículos elétricos e práticas de corrida sustentáveis.</p>

            
        </DesignNoticia2>
    )
}