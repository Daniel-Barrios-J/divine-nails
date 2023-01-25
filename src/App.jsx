//hooks, router
import { Route, Routes } from "react-router";
import Contacto from "./pages/contacto/Contacto";

//routes - pages
import Home from "./pages/home/Home";
import Nosotros from "./pages/nosotros/nosotros";
import Promociones from "./pages/promociones/promociones";
import Servicios from "./pages/servicios/servicios";

//components
import Header from "./components/container/Header";
import Sucursal from "./pages/sucursal/Sucursal";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="contacto" element={<Contacto />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="promociones" element={<Promociones />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="sucursal" element={<Sucursal />} />
      </Routes>
    </div>
  );
}

export default App;
