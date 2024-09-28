
import { DesignCorridasMain } from "./styleCorridas";
import Sect1Corridas from "./Sect1Corridas";

export default function MainCorridas(){

    return(
        <DesignCorridasMain>
            <h1 id="titulo">Corridas</h1>
            <h2 id="categoria">Corridas Futuras</h2>
            <Sect1Corridas/>
        </DesignCorridasMain>
    )
}