import { DesignLojaMain } from "./styleLoja";
import Sect1Loja from "./Sect1Loja";
import Sect2Loja from "./Sect2Loja";
import Sect3Loja from "./Sect3Loja";
import Sect4Loja from "./Sect4Loja";

export default function MainLoja(){
    return(
        <DesignLojaMain>
            <h1 id="titulo">Loja</h1>
            <h2 className="categorias">BONÉS</h2>
            <Sect1Loja/>
            <Sect2Loja/>
            <h2 className="categorias">TENNIS</h2> 
            <Sect3Loja/> 
            <Sect4Loja/>

        </DesignLojaMain>
    )
}