import { bgBrandRoundRobin } from "../../utils/common/brandUtils";
import type { KnownTag } from "../../utils/common/tags";

export interface TagProps {
  knownTag?: KnownTag,
  customLabel?: string,
  bgType: number,
  darken?: boolean,
  action?: () => void,
  asDiv?: boolean,
}

function TagContent(props: TagProps) {
  return (
    <>
      {props.knownTag?.logoSrc && <img src={props.knownTag.logoSrc} className="max-h-[18px]" />}
      <p className="text-md font-medium">{props.knownTag?.label ?? props.customLabel}</p>
    </>
  )
}

export function Tag(props: TagProps){
  if(!props.asDiv) {
    return (
      <button 
        className={`${props.action && 'cursor-pointer'} rounded-classic flex justify-center items-center gap-[7px] px-[5px] py-[3px] ${props.darken ? "bg-background-neutral-disabled" : bgBrandRoundRobin(props.bgType)}`}
        onClick={props.action ?? (() => {})}
      >
        <TagContent {...props} />
      </button>
    )
  } else {
    return (
      <div 
        className={`${props.action && 'cursor-pointer'} rounded-classic flex justify-center items-center gap-[7px] px-[5px] py-[3px] ${props.darken ? "bg-background-neutral-disabled" : bgBrandRoundRobin(props.bgType)}`}
        onClick={props.action ?? (() => {})}
      >
        <TagContent {...props} />
      </div>
    )
  }
}
