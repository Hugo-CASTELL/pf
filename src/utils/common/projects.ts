import { figma, nginx, react, type KnownTag } from "./tags";

export interface Project {
  title: string;
  slug: string;
  tags: KnownTag[],
}

export const portfolio: Project = {
  title: "This portfolio",
  slug: "portfolio",
  tags: [figma, react, nginx]
}

export const parcoursup: Project = {
  title: "Parcoursup-like",
  slug: "parcoursup-like",
  tags: []
}

export const microprocessor: Project = {
  title: "Microprocessor from logic",
  slug: "microprocessor-from-logic",
  tags: []
}

export const blindtest: Project = {
  title: "Blind test online game",
  slug: "blind-test",
  tags: []
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
