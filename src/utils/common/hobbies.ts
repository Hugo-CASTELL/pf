import type { ReactNode } from "react";
import { programmingCards } from "../../components/hobbies/ProgrammingCards";
import { sportsCards } from "../../components/hobbies/SportsCards";
import { videogamesCards } from "../../components/hobbies/VideogamesCards";

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
  activities: sportsCards
}

export const videogames: Hobby = {
  title: "videogames",
  activities: videogamesCards
}
