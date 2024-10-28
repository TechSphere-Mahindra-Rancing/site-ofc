import MenuDash from "../../components/Menu Dashboard/MenuDash"
import { MainStyled } from "./Style/MainStyled"

export default function MainDashboard() {

    return (
        <MainStyled>
            <div className="menu">
                <MenuDash/>
            </div>
            
        </MainStyled>
    )
}