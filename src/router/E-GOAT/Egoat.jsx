import { MainStyled } from "../Dashboard/Style/MainStyled"
import MenuDash from "../../components/Menu Dashboard/MenuDash"
import Top from "../Dashboard/Components/Top"
import { EgoatHistorico } from "./EgoatHistorico"

const Egoat =()=>{

    return (

        <MainStyled>
            <section className="menu">
                <MenuDash/>
            </section>
            <section className="container">
                <Top />
                

            </section>

        </MainStyled>
    )
}

export default Egoat