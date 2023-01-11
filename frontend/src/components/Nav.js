import { Link } from "react-router-dom";
import { Navbar } from "./NavStyled";

const Nav = function () {
  return (
    <Navbar>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {/* <li>
            <Link to="/inventario">Inventario</Link>
          </li> */}
        </ul>
      </nav>
    </Navbar>
  );
};
export default Nav;
