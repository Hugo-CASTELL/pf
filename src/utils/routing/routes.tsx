import {type JSX} from "react";
import {Home} from "../../pages/Home.tsx";

interface CustomRoute {
  title: string;
  path: string;
  element: () => JSX.Element;
}

export const allRoutes: CustomRoute[]  = [
  { title: "Home", path: "/", element: () => <Home/> },
]