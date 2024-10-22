
import { DesignMainNoticias } from "./styleNoticias";
import Sect1Noticias from "./Sect1Not";

export default function MainNoticias(){
    return(
        <DesignMainNoticias>
            <div className="div-titulo">
                <h1 id="titulo">Central de Notícias</h1>
            </div>
            <Sect1Noticias/> 
                      
        </DesignMainNoticias>
    )
}