import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";
import { transitionFast } from "../../utils/common/brandUtils";

interface PickUpCardProps {
  label: string;
  classNameAddition: string;
}
 
export function PickUpCard(props: PickUpCardProps){
  return (
    <button
      className={`min-w-[180px] cursor-pointer rounded-t-extra flex flex-col justify-start ${transitionFast} ${props.classNameAddition} border-x-3 border-t-3 border-background-neutral-secondary`}
    >
      <div className="w-full flex justify-between items-center pt-1 px-2">
        <p className="text-left text-md font-semibold">{props.label}</p>
        <CursorArrowRaysIcon className="size-icon-sm" />
      </div>
    </button>
  )
}
