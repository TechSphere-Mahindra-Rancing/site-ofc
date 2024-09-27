import { DesignLojaMain } from "./styleLoja";
import Sect1Loja from "./Sect1Loja";
import Sect2Loja from "./Sect2Loja";
import Sect3Loja from "./Sect3Loja";
import Sect4Loja from "./Sect4Loja";

export default function MainLoja(){
    return(
        <DesignLojaMain>
            <h1>Loja</h1>
            <h2>*CATEGORIA*</h2>
            <Sect1Loja/>
            <Sect2Loja/>
            <h2>*CATEGORIA*</h2> 
            <Sect3Loja/> 
            <Sect4Loja/>

        </DesignLojaMain>
    )
}