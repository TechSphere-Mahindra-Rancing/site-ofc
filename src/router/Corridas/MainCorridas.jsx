
import { DesignCorridasMain } from "./styleCorridas";
import Sect1Corridas from "./Sect1Corridas";
import Sect2Corridas from "./Sect2Corridas";
import Sect3Corridas from "./Sect3Corridas";

export default function MainCorridas(){

    return(
        <DesignCorridasMain>
            <h1 id="titulo">Corridas</h1>
            <h2 className="categorias">CORRIDAS FUTURAS</h2>
            <Sect1Corridas/>
            <Sect2Corridas/>
            <h2 className="categorias">CORRIDAS PASSADAS</h2>
            <Sect3Corridas/>
        </DesignCorridasMain>
    )
}