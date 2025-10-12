import type { ReactNode } from "react";
import { HobbyCard } from "./HobbyCard";

function FirstCard() {
  return (
    <HobbyCard>
      videogames 
    </HobbyCard>
  )
}

export const videogamesCards: ReactNode[] = [<FirstCard />]
