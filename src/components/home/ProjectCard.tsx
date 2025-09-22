import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface ProjectCardProps {
  imgSrc?: string,
  label: string,
  bgType: 1 | 2 | 3 | 4,
  action?: () => void,
}

function bgSelector(bgType: 1 | 2 | 3 | 4) {
  switch (bgType) {
    case 1: return "bg-background-brand-primary";
    case 2: return "bg-background-brand-secondary";
    case 3: return "bg-background-brand-tertiary";
    case 4: return "bg-background-neutral-tertiary";
  }
}

function iconSelector(bgType: 1 | 2 | 3 | 4) {
  switch (bgType) {
    case 1: return "bg-content-brand-primary";
    case 2: return "bg-content-brand-primary";
    case 3: return "bg-content-brand-primary";
    case 4: return "bg-content-brand-primary";
  }
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <button className={`relative flex flex-col items-center w-96 h-[180px] rounded-extra ${bgSelector(props.bgType)} overflow-hidden`} onClick={props.action ?? (() => {})}>
    <div className="w-full flex items-center px-[18px] py-[13px]">
      <h1 className="flex-1 text-left text-xl font-semibold">{props.label}</h1>
      <div className={`grid place-items-center size-icon-md rounded-full ${iconSelector(props.bgType)}`}>
        <ArrowRightIcon className="size-icon-sm fill-content-inverse-primary" />
      </div>
    </div>
    <img src={props.imgSrc} className="w-9/10 rounded-classic" />
    </button>
  )
}
