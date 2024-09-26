import { DesingSect5Home } from "./homeDesign";
import ImagemInteracoes from "../../../public/imagem-interacao.png"

export default function Sect5Home(){
    return(
        <DesingSect5Home>
            <div className="titulo-subtitulo">
                <h1>FIQUE POR DENTRO</h1>
                <h2>Sistema de login com interação de usuários</h2>
            </div>
            <div className="container-principal">
                <img src={ImagemInteracoes} alt="imagem representativa de interações por chat de texto" />
                <div className="paragrafo">
                    <h1>Interações</h1>
                    <p>Na plataforma de login interativa da Fórmula E, os aficionados se conectam como nunca antes. Ao entrar na rede social, os usuários mergulham em uma comunidade eletrizante, compartilhando emoções de cada corrida, debatendo estratégias e celebrando vitórias. Perfis personalizados refletem a lealdade das equipes e os feitos nas pistas, enquanto as interações sociais promovem competições amigáveis e trocas de conhecimento. Esta rede não apenas une fãs da Fórmula E, mas também promove a conscientização sobre a importância da tecnologia sustentável no automobilismo, impulsionando uma nova era de entretenimento esportivo conectado e ecologicamente consciente.
                    </p>
                    <a href="#">SAIBA MAIS</a>
                </div>
            </div>
        </DesingSect5Home>
    )
}