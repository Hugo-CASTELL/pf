import type { ReactNode } from "react";
import { HobbyCard } from "./HobbyCard";
import { github } from "../../utils/common/socials";

function FirstCard() {
  return (
    <HobbyCard>
      <div>
        <p>Something</p>
        <p>missing ?</p>
        <p>I code it.</p>
      </div>
    </HobbyCard>
  )
}

function SecondCard() {
  return (
    <HobbyCard>
      <div className="text-center flex flex-col">
        <p>Minecraft add-ons</p>
        <p className="mb-1">for fun.</p>
        <a href={`${github.url}/quickinfo`} target="_blank" className="underline">quickinfo</a>
        <a href={`${github.url}/mcdalaplugin`} target="_blank" className="underline">mcdalaplugin</a>
        <a href={`${github.url}/resources-pack-compiler`} target="_blank" className="underline">respackcompiler</a>
      </div>
    </HobbyCard>
  )
}

function ThirdCard() {
  return (
    <HobbyCard>
      <div>
      </div>
    </HobbyCard>
  )
}

function FourthCard() {
  return (
    <HobbyCard>
      <div>
        <p>Something</p>
        <p>missing ?</p>
        <p>I code it.</p>
      </div>
    </HobbyCard>
  )
}

function FifthCard() {
  return (
    <HobbyCard>
      <div>
        <p>Because</p>
        <p>I love</p>
        <p>building</p>
        <p>things</p>
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
      <div>
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
      </div>
    </HobbyCard>
  )
}

export const programmingCards: ReactNode[] = [<FirstCard />, <SecondCard />, <ThirdCard />, <FourthCard />, <FifthCard />, <SixthCard />, <SeventhCard />, <EighthCard />, <NinethCard />]
