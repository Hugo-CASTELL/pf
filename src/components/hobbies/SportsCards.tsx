import type { ReactNode } from "react";
import { HobbyCard } from "./HobbyCard";

function FirstCard() {
  return (
    <HobbyCard>
      sports 
    </HobbyCard>
  )
}

export const sportsCards: ReactNode[] = [<FirstCard />]
