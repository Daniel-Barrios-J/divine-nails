//Libs
import styled from "styled-components"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//pages-components
import AboutUs from "./pages/aboutUs/AboutUs"
import ContactPage from "./pages/contact/ContactPage";
import ServicesPage from "./pages/services/ServicesPage";
import SucursalPage from "./pages/sucursal/SucursalPage";
import PromosPage from "./pages/promos/PromosPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import Header from "./components/container/Header";
import HomePage from "./pages/home/HomePage";

//styled-components
const AppContainer = styled.div`
  background-color: #bed6f1;
  width: 100vw;
  min-height: 100vh;
  .header {
    width: 100%;
    height: 10vh;
  }
  .page {
    width: 100%;
    min-height: 92vh;
  }
`

function App() {

  return (
    <Router>
      <AppContainer>
        <div className="header">
          <Header/>
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/services" element={<ServicesPage />}></Route>
            <Route path="/sucursal" element={<SucursalPage />}></Route>
            <Route path="/promos" element={<PromosPage />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </AppContainer>
    </Router>
  )
}

export default App
