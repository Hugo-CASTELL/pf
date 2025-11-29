import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";
import { transitionFast } from "../../utils/common/brandUtils";

interface PickUpCardProps {
  label: string,
  classNameAddition: string,
  onClick: () => void,
}
 
export function PickUpCard(props: PickUpCardProps){
  return (
    <button
      className={`min-w-[180px] desktop:min-w-1/2 cursor-pointer rounded-t-extra flex flex-col justify-start ${transitionFast} ${props.classNameAddition} border-x-3 border-t-3 border-background-neutral-secondary`}
      onClick={props.onClick}
    >
      <div className="w-full flex justify-between items-center pt-1 px-2">
        <p className="text-left text-md font-semibold">{props.label}</p>
        <CursorArrowRaysIcon className="size-icon-sm" />
      </div>
    </button>
  )
}
