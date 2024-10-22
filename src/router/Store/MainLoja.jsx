import { DesignLojaMain } from "./styleLoja";
import Sect1Loja from "./Sect1Loja";
import Sect2Loja from "./Sect2Loja";
import Sect3Loja from "./Sect3Loja";
import Sect4Loja from "./Sect4Loja";

export default function MainLoja(){
    return(
        <DesignLojaMain>
            <div className="div-titulo">
                <h1 id="titulo">Loja</h1>
            </div>
            <h2 className="categorias">Compra de Pontos</h2>
            <Sect1Loja/>
            <Sect2Loja/>
            <h2 className="categorias">Itens Colecionáveis</h2> 
            <Sect3Loja/> 
            <h2 className="categorias">Favoritos da Galera</h2>
            <Sect4Loja/>

        </DesignLojaMain>
    )
}