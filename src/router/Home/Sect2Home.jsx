import { DesingSect2Home } from "./homeDesign";
import CarroMahindra1 from "../../../public/carro-mahindra1.png"


export default function Sect2Home(){
    return(
        <DesingSect2Home>
                <div className="container-sect2">
                    <img src={CarroMahindra1} alt="foto de um carro de formula e da mahindra" />
                <div className="container-sect2-paragrafo">
                    <h1>Carros Elétricos Mahindra Racing</h1>
                    <p>Os carros elétricos da Mahindra Racing são líderes na Fórmula E, combinando tecnologia avançada e desempenho excepcional. Equipados com baterias de íon-lítio de última geração e sistemas de regeneração de energia, garantem eficiência máxima. Sua aerodinâmica otimizada e controles de tração oferecem estabilidade e agilidade. Além disso, são ambientalmente sustentáveis, eliminando emissões de escape. A constante inovação da Mahindra Racing mantém esses carros na vanguarda da categoria, representando o compromisso da empresa com a mobilidade elétrica e um futuro mais limpo e tecnológico para a indústria automotiva.</p>
                </div>
            </div>
        </DesingSect2Home>
    )
}