import { TopStyled } from "./Style/TopStyled"
import { RiCopperCoinFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Top =()=>{


    // GRADIENTE PARA O TEXTO ( style={gradientTextStyle} )
    const gradientTextStyle = {
        fontSize: "1em",
        fontWeight: "bold",
        background: "linear-gradient(90deg, #BB3737 0%, #003E8E 100%)",
        backgroundSize: "400% 400%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: "gradientAnimation 5s ease infinite"
    };

    return (

        <TopStyled>
            <div className="title" style={gradientTextStyle}>
                <h1 className="title">Hi, User!</h1>
                <h3 className="title">Welcome back</h3>
            </div>

            <div className="uses">
                <div className="search">
                    <FaSearch className="icon"/>
                    <input type="text" placeholder="pesquisar"/>
                </div>

                <div className="notification">
                    <IoNotifications className="icon"/>
                </div>

                <div className="cash">
                    <div><RiCopperCoinFill className="icon"/></div>
                    <div>1250</div>
                </div>

                <div className="profile">
                    <img src="avatar2.png" alt="" />
                </div>
            </div>

            
        </TopStyled>
    )
}

export default Top