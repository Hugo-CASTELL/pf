import { figma, nginx, react, type KnownTag } from "./tags";
import { PortfolioBelow } from "../../components/projects/content/portfolio";
import { MicroprocessorBelow } from "../../components/projects/content/microprocessor";
import type { ReactNode } from "react";
import { ParcoursupBelow } from "../../components/projects/content/parcoursup";
import { EuroguessrBelow } from "../../components/projects/content/euroguessr";

export interface Project {
  title: string;
  slug: string;
  tags: KnownTag[],
  thumbnail?: string,
  below?: ReactNode,
}

export const portfolio: Project = {
  title: "This portfolio",
  slug: "portfolio",
  tags: [figma, react, nginx],
  thumbnail: "projects/portfolio/thumbnail.png",
  below: <PortfolioBelow />
}

export const parcoursup: Project = {
  title: "Parcoursup-like",
  slug: "parcoursup-like",
  tags: [],
  thumbnail: "projects/parcoursup/thumbnail.png",
  below: <ParcoursupBelow />
}

export const microprocessor: Project = {
  title: "Microprocessor from logic",
  slug: "microprocessor-from-logic",
  tags: [],
  thumbnail: "projects/microprocessor/thumbnail.webp",
  below: <MicroprocessorBelow />
}

export const blindtest: Project = {
  title: "Blind test online game",
  slug: "blind-test",
  thumbnail: "projects/euroguessr/thumbnail.png",
  tags: [],
  below: <EuroguessrBelow />
}

export const allProjects = [
  portfolio,
  parcoursup,
  microprocessor,
  blindtest
]

export const selectedProjects = [
  portfolio,
  parcoursup,
  microprocessor,
  blindtest
]
