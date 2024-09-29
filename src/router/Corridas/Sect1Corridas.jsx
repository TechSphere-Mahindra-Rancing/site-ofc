import { DesingSect1Corrida } from "./styleCorridas";
import Pista1 from "../../../public/Pista1.png"
import Pista2 from "../../../public/pista2.png"
import Pista3 from "../../../public/pista3.png"

export default function Sect1Corridas(){
    return(
        <DesingSect1Corrida>
            <div className="bloco-corrida">
                <img src={Pista1} alt="imagem do local da próx corrida" />
                <div className="info-corrida">
                    <h1 id="Data-corrida"><em>30</em> JUL</h1>
                    <div className="local-round">
                        <h2 id="local">Monaco</h2>
                        <hr />
                        <h3 id="round"><em>FINAL</em></h3>
                    </div>

                </div>
            </div>    
            <div className="bloco-corrida2">
                <img src={Pista2} alt="imagem do local da próx corrida" />
                <div className="info-corrida2">
                    <h1 id="Data-corrida2"><em>28</em> MAIO</h1>
                    <div className="local-round2">
                        <h2 id="local2">Quebec</h2>
                        <hr />
                        <h3 id="round2">Round <em>10</em></h3>
                    </div>

                </div>
            </div>
            <div className="bloco-corrida3">
                <img src={Pista3} alt="imagem do local da próx corrida" />
                <div className="info-corrida3">
                    <h1 id="Data-corrida3"><em>5</em> JUN</h1>
                    <div className="local-round3">
                        <h2 id="local3">Los Angeles</h2>
                        <hr />
                        <h3 id="round3">Round <em>11</em></h3>
                    </div>

                </div>
            </div>
            
        </DesingSect1Corrida>
    )
}