import type { ReactNode } from "react";
import { HobbyCard } from "./HobbyCard";

function FirstCard() {
  return (
    <HobbyCard>
      baobab 
    </HobbyCard>
  )
}

export const programmingCards: ReactNode[] = [<FirstCard />]
