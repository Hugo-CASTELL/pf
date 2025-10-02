import { bgBrandRoundRobin } from "../../utils/common/brandUtils";
import type { KnownTag } from "../../utils/common/tags";

export interface TagProps {
  knownTag?: KnownTag,
  customLabel?: string,
  bgType: 1 | 2 | 3 | 4,
  action?: () => void,
}

export function Tag(props: TagProps){
  if(props.knownTag) {
    console.log(props.knownTag)
  }
  return (
    <button 
      className={`${props.action && 'cursor-pointer'} rounded-classic flex justify-center items-center gap-[7px] px-[5px] py-[3px] ${bgBrandRoundRobin(props.bgType)}`}
      onClick={props.action ?? (() => {})}
    >
      {props.knownTag?.logoSrc && <img src={props.knownTag.logoSrc} className="max-h-[18px]" />}
      <p className="text-md font-medium">{props.knownTag?.label ?? props.customLabel}</p>
    </button>
  )
}
