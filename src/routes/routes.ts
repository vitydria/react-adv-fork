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
const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName: "LazyLayout"*/ "../lazyload/layout/LazyLayout")
);
const NoLazy = lazy(
  () => import(/*webpackChunkName: "No Lazy"*/ "../lazyload/pages/NoLazy")
);

export const routes: Route[] = [
  //indicar el tipado y que es un array con []
  {
    to: "/lazyload",
    path: "lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  { to: "/no-lazy", path: "no-lazy", Component: NoLazy, name: "No Lazy" },
];
