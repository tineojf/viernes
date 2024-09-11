import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import { rutas } from "./rutas";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={rutas.home} element={<Home />} />
        <Route path={rutas.contact} element={<Contact />} />
        <Route path={rutas.detail + ":id"} element={<Detail />} />
        <Route path={rutas.favs} element={<Favs />} />
        {/* agregar ruta notfoun */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
