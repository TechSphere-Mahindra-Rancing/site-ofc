
import { DesignHome } from "./homeDesign"
import Sect1Home from "./Sect1Home"
import Sect2Home from "./Sect2Home"
import Sect3Home from "./Sect3Home"
import Sect4Home from "./Sect4Home"
import Sect5Home from "./Sect5Home"

export default function MainHome(){
    return(
        <DesignHome>
            <Sect1Home/>
            <Sect2Home/>
            <Sect3Home/>
            <Sect4Home/>
            <Sect5Home/>
        </DesignHome>
    )
}