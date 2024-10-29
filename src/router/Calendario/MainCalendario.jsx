import { MainStyled } from "../Dashboard/Style/MainStyled"
import MenuDash from "../../components/Menu Dashboard/MenuDash"
import Top from "../Dashboard/Components/Top"

const Calendario =()=>{

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

export default Calendario