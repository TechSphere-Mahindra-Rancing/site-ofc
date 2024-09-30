// import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Noticia1 from "./router/Noticias/No1"
// import MainNoticias from "./router/Noticias/MainNoticias"


function App() {
  

  return (
    <>
      <Header/>
      {/* <Outlet/> */}
      <Noticia1/>
      <Footer/>
    </>
  )
}

export default App
