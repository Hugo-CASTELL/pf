import {type JSX} from "react";
import {Home} from "../../pages/Home.tsx";
import { Hobbies } from "../../pages/Hobbies.tsx";
import { InternationalMobility } from "../../pages/InternationalMobility.tsx";
import { CareerDevelopment } from "../../pages/CareerDevelopment.tsx";
import { CivicEngagement } from "../../pages/CivicEngagement.tsx";
import { Contact } from "../../pages/Contact.tsx";
import { ProjectLoader } from "../../components/projects/ProjectLoader.tsx";
import { Projects } from "../../pages/Projects.tsx";

interface CustomRoute {
  title: string;
  path: string;
  element: () => JSX.Element;
}

export const HomeRoute: CustomRoute = { title: "Home", path: "/", element: () => <Home/> };
export const ProjectsRoute: CustomRoute = { title: "Projects", path: "/projects", element: () => <Projects /> };
export const ProjectRoute: CustomRoute = { title: "Project overview", path: "/projects/:slug", element: () => <ProjectLoader /> };
export const HobbiesRoute: CustomRoute = { title: "Hobbies", path: "/hobbies", element: () => <Hobbies/> };
export const InternationalMobilityRoute: CustomRoute = { title: "International mobility", path: "/international-mobility", element: () => <InternationalMobility/> };
export const CareerDevelopmentRoute: CustomRoute = { title: "Career development", path: "/career-development", element: () => <CareerDevelopment/> };
export const CivicEngagementRoute: CustomRoute = { title: "Civic engagement", path: "/civic-engagement", element: () => <CivicEngagement/> };
export const ContactRoute: CustomRoute = { title: "Contact", path: "/contact", element: () => <Contact /> };

export const allRoutes: CustomRoute[]  = [
  HomeRoute,
  ProjectRoute,
  ProjectsRoute,
  HobbiesRoute,
  InternationalMobilityRoute,
  CareerDevelopmentRoute,
  CivicEngagementRoute,
  ContactRoute,
]
