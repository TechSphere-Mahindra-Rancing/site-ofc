
import { DesignCorridasMain } from "./styleCorridas";
import Sect1Corridas from "./Sect1Corridas";
import Sect2Corridas from "./Sect2Corridas";
import Sect3Corridas from "./Sect3Corridas";
import Top from "../Dashboard/Components/Top"
import MenuDash from "../../components/Menu Dashboard/MenuDash";
import { MainStyled } from "../Dashboard/Style/MainStyled";

export default function MainCorridas(){

    return(
        <DesignCorridasMain>
            <MainStyled>
                <section className="menu">
                    <MenuDash />
                </section>
                <section className="container">
                    <div>
                        <Top />
                    </div>
                    <h2 className="categorias">CORRIDAS FUTURAS</h2>
                    <Sect1Corridas/>
                    <Sect2Corridas/>
                    <h2 className="categorias">CORRIDAS PASSADAS</h2>
                    <Sect3Corridas/>
                </section>
            </MainStyled>
        </DesignCorridasMain>
    )
}