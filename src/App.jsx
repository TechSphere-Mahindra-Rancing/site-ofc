// import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import Noticia2 from "./router/Noticias/Not2"
// import MainNoticias from "./router/Noticias/MainNoticias"
import MainLoja from "./router/Store/MainLoja"


function App() {
  

  return (
    <>
      <Header/>
      {/* <Outlet/> */}
      <MainLoja/>
      <Footer/>
    </>
  )
}

export default App
