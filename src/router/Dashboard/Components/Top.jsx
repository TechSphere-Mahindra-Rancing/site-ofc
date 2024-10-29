import { useLocation } from "react-router-dom";
import { useEffect, useState, useNavigate } from "react";
import { TopStyled } from "./Style/TopStyled";
import { RiCopperCoinFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Top = () => {

    // Função que pega o nome do usuário para aparecer no dashboard
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = sessionStorage.getItem('usuario');
    if (user) {
      setUserName(user);
    }
  }, []);   

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

  const location = useLocation();
  const getTitle = () => {
    if (location.pathname === "/dashboard") {
      return {
        mainTitle: userName ? `Hi, ${userName}!` : '',
        subTitle: "Welcome back"
      };
    }

    const routeName = location.pathname.replace("/", "").toUpperCase();
    return {
      mainTitle: routeName,
      subTitle: "Formula Hub"
    };
  };

  const { mainTitle, subTitle } = getTitle();

  return (
    <TopStyled>
      <div className="title-container" style={gradientTextStyle}>
        <h1 className="title">{mainTitle}</h1>
        <h3 className="title">{subTitle}</h3>
      </div>

      <div className="uses">
        <div className="search">
          <FaSearch className="icon"/>
          <input type="text" placeholder="pesquisar"/>
        </div>

        <div className="perfil">
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

        
      </div>
    </TopStyled>
  );
}

export default Top;
