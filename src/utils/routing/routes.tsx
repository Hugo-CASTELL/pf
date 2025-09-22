import {type JSX} from "react";
import {Home} from "../../pages/Home.tsx";
import { ProjectTemplate } from "../../components/projects/ProjectTemplate.tsx";
import { Hobbies } from "../../pages/Hobbies.tsx";
import { InternationalMobility } from "../../pages/InternationalMobility.tsx";
import { CareerDevelopment } from "../../pages/CareerDevelopment.tsx";
import { CivicEngagement } from "../../pages/CivicEngagement.tsx";
import { Contact } from "../../pages/Contact.tsx";

interface CustomRoute {
  title: string;
  path: string;
  element: () => JSX.Element;
}

export const HomeRoute: CustomRoute = { title: "Home", path: "/", element: () => <Home/> };
export const ProjectsRoute: CustomRoute = { title: "Projects", path: "/projects", element: () => <ProjectTemplate projectTitle={"This portfolio"} projectTags={["Frontend", "React", "Figma"]} /> };
export const HobbiesRoute: CustomRoute = { title: "Hobbies", path: "/hobbies", element: () => <Hobbies/> };
export const InternationalMobilityRoute: CustomRoute = { title: "International mobility", path: "/international-mobility", element: () => <InternationalMobility/> };
export const CareerDevelopmentRoute: CustomRoute = { title: "Career development", path: "/career-development", element: () => <CareerDevelopment/> };
export const CivicEngagementRoute: CustomRoute = { title: "Civic engagement", path: "/civic-engagement", element: () => <CivicEngagement/> };
export const ContactRoute: CustomRoute = { title: "Contact", path: "/contact", element: () => <Contact /> };

export const allRoutes: CustomRoute[]  = [
  HomeRoute,
  ProjectsRoute,
  HobbiesRoute,
  InternationalMobilityRoute,
  CareerDevelopmentRoute,
  CivicEngagementRoute,
  ContactRoute,
]
