import { DesignSect3Corridas } from "./styleCorridas";
import Pista7 from "../../../public/pista7.png"
import Pista8 from "../../../public/pista8.png"
import Pista9 from "../../../public/pista9.png"

export default function Sect3Corridas(){
    return(
        <DesignSect3Corridas>
            <div className="bloco-corrida">
                <img src={Pista7} alt="imagem do local da próx corrida" />
                <div className="info-corrida">
                    <h1 id="Data-corrida"><em>2</em> MAR</h1>
                    <div className="local-round">
                        <h2 id="local">Viena</h2>
                        <hr />
                        <h3 id="round">Round <em>5</em></h3>
                    </div>

                </div>
            </div>    
            <div className="bloco-corrida2">
                <img src={Pista8} alt="imagem do local da próx corrida" />
                <div className="info-corrida2">
                    <h1 id="Data-corrida2"><em>25</em> ABR</h1>
                    <div className="local-round2">
                        <h2 id="local2">Rio de Janeiro</h2>
                        <hr />
                        <h3 id="round2">Round <em>8</em></h3>
                    </div>

                </div>
            </div>
            <div className="bloco-corrida3">
                <img src={Pista9} alt="imagem do local da próx corrida" />
                <div className="info-corrida3">
                    <h1 id="Data-corrida3"><em>26</em> FEV</h1>
                    <div className="local-round3">
                        <h2 id="local3">Londres</h2>
                        <hr />
                        <h3 id="round3">Round <em>4</em></h3>
                    </div>

                </div>
            </div>            
        </DesignSect3Corridas>
    )

}