import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DesignMainNoticias } from "./styleNoticias";
import Sect1Noticias from "./Sect1Not";

export default function MainNoticias(){
    return(
        <DesignMainNoticias>
            <Header/>
            <Sect1Noticias/>
            <Footer/>
        </DesignMainNoticias>
    )
}