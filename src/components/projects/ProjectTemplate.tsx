import { ArrowDownIcon } from "@heroicons/react/16/solid"
import { Tag } from "../common/Tag"
import { PickUpCard } from "../home/PickUpCard"

interface ProjectTemplateProps {
  projectTitle: string,
  projectTags: string[],
  children?: React.ReactNode
}

export function ProjectTemplate(props: ProjectTemplateProps) {
  return (
    <div className="flex flex-col gap-[18px]">

      {/* Hero */}
      <div className="w-full bg-background-neutral-secondary flex flex-col gap-10 justify-center items-center pt-10">

        {/* Title section */}
        <div className="flex flex-col gap-[10px]">
          <h1 className="relative text-2xl font-semibold">
            Wonder how I made <br />
            <span className="relative">
              <span className="relative z-10">{props.projectTitle},</span>
              <div className="absolute z-0 bottom-0 left-1 right-2 h-2/3 bg-background-neutral-tertiary" />
            </span><br />
            You are at the right place.
          </h1>
          <div className="flex gap-4">
            {props.projectTags.slice(0, 3).map((label, index) => {
              let color = 3-index as 3 | 2 | 1
              return <Tag label={label} bgType={color} />
            })}
          </div>
          <div className="flex justify-around py-[15px]">
            <ArrowDownIcon className="size-icon-2xl" />
            <ArrowDownIcon className="size-icon-2xl" />
            <ArrowDownIcon className="size-icon-2xl" />
          </div>
        </div>

        {/* Fast section */}
        <div className="max-w-full h-64">
        </div>

      </div>

      {/* Children */}
      {props.children}

    </div>
  )
}
