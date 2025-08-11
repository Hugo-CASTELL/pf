import {type JSX} from "react";
import {Home} from "../../pages/Home.tsx";

interface CustomRoute {
  title: string;
  path: string;
  element: () => JSX.Element;
}

export const HomeRoute: CustomRoute = { title: "Home", path: "/", element: () => <Home/> };
export const ProjectsRoute: CustomRoute = { title: "Projects", path: "/projects", element: () => <Home/> };
export const HobbiesRoute: CustomRoute = { title: "Hobbies", path: "/hobbies", element: () => <Home/> };
export const InternationalMobilityRoute: CustomRoute = { title: "International mobility", path: "/international-mobility", element: () => <Home/> };
export const CareerDevelopmentRoute: CustomRoute = { title: "Career development", path: "/career-development", element: () => <Home/> };
export const CivicEngagementRoute: CustomRoute = { title: "Civic engagement", path: "/civic-engagement", element: () => <Home/> };
export const ContactRoute: CustomRoute = { title: "Contact", path: "/contact", element: () => <div /> };

export const allRoutes: CustomRoute[]  = [
  HomeRoute,
  ProjectsRoute,
  HobbiesRoute,
  InternationalMobilityRoute,
  CareerDevelopmentRoute,
  CivicEngagementRoute,
  ContactRoute,
]
