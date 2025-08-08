import {type JSX} from "react";
import {Home} from "../../pages/Home.tsx";

interface CustomRoute {
  title: string;
  path: string;
  element: () => JSX.Element;
}

export const allRoutes: CustomRoute[]  = [
  { title: "Home", path: "/", element: () => <Home/> },
  { title: "O", path: "/", element: () => <Home/> },
  { title: "Ot", path: "/", element: () => <Home/> },
  { title: "Oth", path: "/", element: () => <Home/> },
  { title: "Othe", path: "/", element: () => <Home/> },
  { title: "Other", path: "/", element: () => <Home/> },
]
