import { MainStyled } from "../Dashboard/Style/MainStyled"
import MenuDash from "../../components/Menu Dashboard/MenuDash"
import Top from "../Dashboard/Components/Top"
import Sect1Egoat from "./egoatHome" // Mantendo esta linha

const Egoat = () => {
    return (
        <MainStyled>
            <section className="menu">
                <MenuDash />
            </section>
            <section className="container">
                <Top />
                <Sect1Egoat /> {/* Este componente está sendo usado */}
            </section>
        </MainStyled>
    )
}

export default Egoat
