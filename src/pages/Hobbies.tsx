import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { BaseTemplate } from "../components/common/BaseTemplate";
import { TitleHightlight } from "../components/common/TitleHighlight";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { bgBrandRoundRobin } from "../utils/common/brandUtils";
import { useState } from "react";
import { programming, sports, videogames, type Hobby } from "../utils/common/hobbies";

interface SideProps {
  hobby: Hobby,
  setHobby: (h:Hobby) => void,
}

function HobbiesSide({ hobby, setHobby }: SideProps) {

  const changeHobby = (current: Hobby, next: boolean): Hobby => {
    const list = [programming, sports, videogames]
    const i = list.findIndex(h => h.title === current?.title);
    return list[
      (next
        ? (i + 1 + list.length) % list.length
        : (i - 1 + list.length) % list.length) || 0
    ];
  };
  
  return (
    <div className="w-screen h-fit flex justify-between items-center pt-4 pb-18">
      <button className="h-full grid place-items-center" onClick={() => setHobby(changeHobby(hobby, false))}>
        <ChevronLeftIcon className="size-icon-2xl" />
      </button>
      <div className="h-[50vh] flex-1 grid grid-flow-col place-items-center grid-cols-3 grid-rows-3 gap-4">
        {new Array(9).fill(0).map((_, index) => {
            const hobbyCard = hobby.activities[index]
            return <div className={`w-full h-full overflow-hidden rounded-extra ${bgBrandRoundRobin(index)}`}>{hobbyCard ?? index+1}</div>
          }

        )}
      </div>
      <button className="h-full grid place-items-center" onClick={() => setHobby(changeHobby(hobby, true))}>
        <ChevronRightIcon className="size-icon-2xl" />
      </button>
    </div>
  )
}

export function Hobbies() {
  const [hobby, setHobby] = useState<Hobby>(programming)

  return (
    <BaseTemplate
      title={
        <span className="text-content-neutral-tertiary">
          <TitleHightlight onClick={() => setHobby(programming)} selected={hobby.title == programming.title}>{programming.title}</TitleHightlight> for fun,<br />
          mainly <TitleHightlight onClick={() => setHobby(sports)} selected={hobby.title == sports.title}>{sports.title}</TitleHightlight>,<br />
          and also <TitleHightlight onClick={() => setHobby(videogames)} selected={hobby.title == videogames.title}>{videogames.title}</TitleHightlight>.<br />
        </span>
      }
      sideSection={<HobbiesSide hobby={hobby} setHobby={setHobby} />}
    />
  )
}
