import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { contentBrandRoundRobin, bgBrandRoundRobin, outlineByBrandBackground, transitionClassic } from "../../utils/common/brandUtils";
import { Tag, type TagProps } from "../common/Tag";
import type { KnownTag } from "../../utils/common/tags";

interface ProjectCardProps {
  imgSrc?: string,
  label: string,
  tags?: KnownTag[],
  bgType: 1 | 2 | 3 | 4,
  action?: () => void,
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <button className={`relative flex flex-col items-center w-96 h-[180px] rounded-extra outline-3 outline-background-neutral-secondary ${transitionClassic} hover:${outlineByBrandBackground(bgBrandRoundRobin(props.bgType) as string)} ${bgBrandRoundRobin(props.bgType)} overflow-hidden ${props.action ? "cursor-pointer": ""}`} onClick={props.action ?? (() => {})}>
    <div className="w-full flex items-center px-[18px] py-[13px]">
      <h1 className="flex-1 text-left text-xl font-semibold">{props.label}</h1>
      <div className={`grid place-items-center size-icon-md rounded-full ${contentBrandRoundRobin(props.bgType)}`}>
        <ArrowRightIcon className="size-icon-sm fill-content-inverse-primary" />
      </div>
    </div>
    <img src={props.imgSrc} className="w-9/10 rounded-classic" />
    {props.tags && 
      <div className="absolute right-1 bottom-1 flex gap-2">
        {props.tags.map((knownTag, index) => <Tag key={knownTag.label} knownTag={knownTag} bgType={(index+1)%5 as 1 | 2 | 3 | 4} action={() => {}} />)}
      </div>

    }
    </button>
  )
}
