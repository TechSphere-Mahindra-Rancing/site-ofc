import MenuDash from "../../components/Menu Dashboard/MenuDash"
import { MainStyled } from "./Style/MainStyled"
import Top from "./Components/Top"

export default function MainDashboard() {

    return (
        <MainStyled>
            <section className="menu">
                <MenuDash/>
            </section>

            <section className="container">
                <div className="top-dashboard">
                    <Top />
                </div>
            </section>
        </MainStyled>
    )                                                                                                                                                                     
}