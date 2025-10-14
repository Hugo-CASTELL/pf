import type { ReactNode } from "react";
import { HobbyCard } from "./HobbyCard";

function FirstCard() {
  return (
    <HobbyCard>
      <div>
        <p>Always</p>
        <p>been</p>
        <p>a</p>
      </div>
    </HobbyCard>
  )
}

function SecondCard() {
  return (
    <HobbyCard>
      <div>
      </div>
    </HobbyCard>
  )
}

function ThirdCard() {
  return (
    <HobbyCard>
      <div>
        <p className="mb-1">I practiced</p>
        <p>Gym 8 years</p>
        <p>Handball 6 years</p>
        <p>Archery 4 years</p>
        <p>Running 1 year</p>
      </div>
    </HobbyCard>
  )
}

function FourthCard() {
  return (
    <HobbyCard>
      <div>
      </div>
    </HobbyCard>
  )
}

function FifthCard() {
  return (
    <HobbyCard>
      <div>
        <p className="mb-1">Currently ?</p>
        <p>Gym</p>
        <p>Running</p>
        <p>Hiking</p>
      </div>
    </HobbyCard>
  )
}

function SixthCard() {
  return (
    <HobbyCard>
      <div>
      </div>
    </HobbyCard>
  )
}

function SeventhCard() {
  return (
    <HobbyCard>
      <div className="text-center flex flex-col">
        <p className="mb-1">Personal records</p>
        <p>Deadlift 200kg</p>
        <p>Squat 160kg</p>
        <p>Bench 120kg</p>
        <p>Pull up +50kg</p>
        <p>21km 2h37</p>
      </div>
    </HobbyCard>
  )
}

function EighthCard() {
  return (
    <HobbyCard>
      <div>
      </div>
    </HobbyCard>
  )
}

function NinethCard() {
  return (
    <HobbyCard>
      <div>
        <p>Always</p>
        <p>looking</p>
        <p>forward</p>
      </div>
    </HobbyCard>
  )
}


export const sportsCards: ReactNode[] = [<FirstCard />, <SecondCard />, <ThirdCard />, <FourthCard />, <FifthCard />, <SixthCard />, <SeventhCard />, <EighthCard />, <NinethCard />]
