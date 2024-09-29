import { DesignSect2Corridas } from "./styleCorridas";
import Pista4 from "../../../public/pista4.png"
import Pista5 from "../../../public/pista5.png"
import Pista6 from "../../../public/pista6.png"

export default function Sect2Corridas(){
    return(
        <DesignSect2Corridas>
            <div className="bloco-corrida">
                <img src={Pista4} alt="imagem do local da próx corrida" />
                <div className="info-corrida">
                    <h1 id="Data-corrida"><em>30</em> JUN</h1>
                    <div className="local-round">
                        <h2 id="local">Miami</h2>
                        <hr />
                        <h3 id="round">Round <em>12</em></h3>
                    </div>

                </div>
            </div>    
            <div className="bloco-corrida2">
                <img src={Pista5} alt="imagem do local da próx corrida" />
                <div className="info-corrida2">
                    <h1 id="Data-corrida2"><em>12</em> MAIO</h1>
                    <div className="local-round2">
                        <h2 id="local2">Sidney</h2>
                        <hr />
                        <h3 id="round2">Round <em>9</em></h3>
                    </div>

                </div>
            </div>
            <div className="bloco-corrida3">
                <img src={Pista6} alt="imagem do local da próx corrida" />
                <div className="info-corrida3">
                    <h1 id="Data-corrida3"><em>22</em> MAR</h1>
                    <div className="local-round3">
                        <h2 id="local3">Paris</h2>
                        <hr />
                        <h3 id="round3">Round <em>6</em></h3>
                    </div>

                </div>
            </div>
        </DesignSect2Corridas>
    )

}