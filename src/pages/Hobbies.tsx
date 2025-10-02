import { BaseTemplate } from "../components/common/BaseTemplate";
import { TitleHightlight } from "../components/common/TitleHighlight";

function HobbiesSide() {
  return (
    <div className="w-screen h-full flex justify-between align-center pt-4 pb-18">
      <div>....</div>
      <div className="h-[50vh] flex-1 grid grid-flow-col place-items-center grid-cols-3 grid-rows-3 gap-4">
        {new Array(9).fill(0).map((_, index) =>
            <div className="w-full h-full rounded-extra bg-blue-500">{index+1}</div>
        )}
      </div>
      <div>....</div>
    </div>
  )
}

export function Hobbies() {
  return (
    <BaseTemplate
      title={
        <span className="text-content-neutral-tertiary">
          <TitleHightlight>Programming</TitleHightlight> for fun,<br />
          mainly <TitleHightlight>sports</TitleHightlight>,<br />
          and also <TitleHightlight>videogames</TitleHightlight>.<br />
        </span>
      }
      sideSection={<HobbiesSide />}
    />
  )
}
