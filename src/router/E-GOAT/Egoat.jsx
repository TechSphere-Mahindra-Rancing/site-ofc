import { MainStyled } from "../Dashboard/Style/MainStyled"
import MenuDash from "../../components/Menu Dashboard/MenuDash"
import Top from "../Dashboard/Components/Top"

const Egoat =()=>{

    return (

        <MainStyled>
            <section className="menu">
                <MenuDash/>
            </section>
            <section className="container">
                <Top />
            </section>

            <section className="historico">
                <h2>Histórico</h2>
                <div>
                    <h3>01/02/2025</h3>
                    <p>Compra de Pontos</p>
                    <p>13:34:12</p>
                </div>
                <div>
                    <h3>27/01/2025</h3>
                    <p>Apostou em: Jake Dennis</p>
                    <p>19:53:08</p>
                    <p>Ganho de 23 pontos</p>
                    <p>08:00:00</p>
                </div>
                <div>
                    <h3>01/02/2025</h3>
                    <p>Ganho de 10 pontos</p>
                    <p>10:29:42</p>
                </div>
            </section>
        </MainStyled>
    )
}

export default Egoat