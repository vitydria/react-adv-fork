import { BrowserRouter, Navigate } from "react-router-dom"; //importacion React Router
import { Routes, Route, NavLink } from "react-router-dom";

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
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); //NavLink junto a su atribuyo to sirve para linkearme a otras paginas de mi aplicacion
  //Routes Route apuntan a esas direcciones a las que quiero ir, al estilo del tag <a></a>
  //Navigate me devuelve a el home si no existe el link que esta intentando acceder el usuario
};
