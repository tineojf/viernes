import { Link } from "react-router-dom";
import { rutas } from "../rutas";
import { useContextGlobal } from "./utils/useFunctions";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useContextGlobal();
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ul className="contenedor-navbar">
        <li>
          <Link to={rutas.home}>Home</Link>
        </li>
        <li>
          <Link to={rutas.contact}>Contacto</Link>
        </li>
        <li>
          <Link to={rutas.favs}>Favoritos</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          dispatch({ type: "Tema" });
        }}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
