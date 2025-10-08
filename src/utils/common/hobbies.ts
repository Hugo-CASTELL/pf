import type { ReactNode } from "react";
import { programmingCards } from "../../components/hobbies/ProgrammingCards";

export interface Hobby {
  title: string,
  activities: ReactNode[]
}

export const programming: Hobby = {
  title: "Programming",
  activities: programmingCards
}

export const sports: Hobby = {
  title: "sports",
  activities: []
}

export const videogames: Hobby = {
  title: "videogames",
  activities: []
}
