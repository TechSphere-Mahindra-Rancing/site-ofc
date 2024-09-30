// import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainPiloto from "./router/PaginaPilotos/MainPilotos"



function App() {
  

  return (
    <>
      <Header/>
      {/* <Outlet/> */}
      <MainPiloto/>
      <Footer/>
    </>
  )
}

export default App
