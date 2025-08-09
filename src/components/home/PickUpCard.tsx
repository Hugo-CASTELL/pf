import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";

interface PickUpCardProps {
  label: string;
  classNameAddition: string;
}
 
export function PickUpCard(props: PickUpCardProps){
  return (
    <button
      className={`cursor-pointer rounded-t-extra w-44 flex flex-col justify-start transition-all duration-250 ease-in-out ${props.classNameAddition} border-x-3 border-t-3 border-background-neutral-secondary`}
    >
      <div className="w-full flex justify-between items-center pt-1 px-2">
        <p className="text-md font-semibold">{props.label}</p>
        <CursorArrowRaysIcon className="size-icon-sm" />
      </div>
    </button>
  )
}
