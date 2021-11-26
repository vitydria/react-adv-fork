import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages/";
//definiendo las rutas para exportar a Navigation.tsx

type JSXComponent = () => JSX.Element; // defino aqui el tipo JSX.Element

interface Route {
  //sirve para que nuestros objetos luzcan de cierta manera, autocompletando sus atributos, tipado, tiparemos routes con esto
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; //puede ser una carga perezosa o un compenente jsx
  name: string;
}
//lazy metodo de React que nos permite cargar el componente
const Lazy1 = lazy(
  () => import(/*webpackChunkName: "LazyPage1"*/ "../lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () => import(/*webpackChunkName: "LazyPage2"*/ "../lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () => import(/*webpackChunkName: "LazyPage3"*/ "../lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  //indicar el tipado y que es un array con []
  { to: "/lazy1", path: "lazy1", Component: Lazy1, name: "Lazy-1" },
  { to: "/lazy2", path: "lazy2", Component: Lazy2, name: "Lazy-2" },
  { to: "/lazy3", path: "lazy3", Component: Lazy3, name: "Lazy-3" },
];
