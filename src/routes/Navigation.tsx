import { BrowserRouter, Navigate } from "react-router-dom"; //importacion React Router
import { Routes, Route, NavLink } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages/";

import logo from "../logo.svg";

export const Navigation = () => {
  //React Router sirve para cambiar entre paginas
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo"></img>
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="lazy1"
            /*navegaran a lazy en pages*/ element={<LazyPage1 />}
          />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); //NavLink junto a su atribuyo to sirve para linkearme a otras paginas de mi aplicacion
  //Routes Route apuntan a esas direcciones a las que quiero ir, al estilo del tag <a></a>
  //Navigate me devuelve a el home si no existe el link que esta intentando acceder el usuario
  //Route es la carga perezosa, carga todo solo si el usuario lo clickea
};
