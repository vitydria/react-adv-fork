import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom"; //importacion React Router
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  //React Router sirve para cambiar entre paginas
  return (
    //Usamos el Suspense para decirle a React que mientras cargamos nuestros elementos espere..., envolvemos nuestro BrowserRouter con Suspense, Suspense nor permite mostrar un componente o elemento durante el tiempo de carga
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo"></img>
            <ul>
              {routes.map(({ to, name }) => (
                <li>
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  ); //NavLink junto a su atribuyo to sirve para linkearme a otras paginas de mi aplicacion
  //Routes Route apuntan a esas direcciones a las que quiero ir, al estilo del tag <a></a>
  //Navigate me devuelve a el home si no existe el link que esta intentando acceder el usuario
  //Route es la carga perezosa, carga todo solo si el usuario lo clickea
};
