import { DesingSect3Home } from "./homeDesign";
import BannerHome from "../../../public/banner-mahindra-corrida.jpeg"


export default function Sect3Home(){
    return(
        <DesingSect3Home>
            <div className="container-sect3">
                <img src={BannerHome} alt="imagem de carros da mahindra em uma pista de corrida da formula e" />
                <div className="paragrafos-container">
                    <h1>Velocidade Verde</h1>
                    <p>A Fórmula E promove a sustentabilidade com corridas de carros elétricos, reduzindo emissões e incentivando a adoção de tecnologias limpas.</p>
                </div>
            </div>
        </DesingSect3Home>
    )
}