import { figma, nginx, react, type KnownTag } from "./tags";

interface ProjectProps {
  title: string;
  slug: string;
  tags: KnownTag[],
}

export const portfolio: ProjectProps = {
  title: "This portfolio",
  slug: "portfolio",
  tags: [figma, react, nginx]
}

export const parcoursup: ProjectProps = {
  title: "Parcoursup-like",
  slug: "parcoursup-like",
  tags: []
}

export const microprocessor: ProjectProps = {
  title: "Microprocessor from logic",
  slug: "microprocessor-from-logic",
  tags: []
}

export const blindtest: ProjectProps = {
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
