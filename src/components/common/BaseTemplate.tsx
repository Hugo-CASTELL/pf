import { ArrowDownIcon } from "@heroicons/react/16/solid"
import type { ReactNode } from "react"
import { Button, type ButtonProps } from "./Button"
import { Tag, type TagProps } from "./Tag"

interface BaseTemplateProps {
  title: String | ReactNode,
  tagsProps?: TagProps[]
  buttonsProps?: ButtonProps[]
  arrows?: boolean,
  sideSection?: ReactNode,
  belowSection?: ReactNode,
}

export function BaseTemplate(props: BaseTemplateProps) {
  return (
    <div className="flex flex-col gap-[18px]">

      {/* Hero */}
      <div className="w-full min-h-[600px] bg-background-neutral-secondary flex flex-col gap-10 justify-between items-center pt-10">

        {/* Title section */}
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-2xl font-semibold whitespace-pre-line">
            {props.title}
          </h1>
          {props.tagsProps && 
            <div className="flex gap-4">
              {props.tagsProps.map((tagProp) => <Tag label={tagProp.label} imgSrc={tagProp.imgSrc} bgType={tagProp.bgType} action={tagProp.action} />)}
            </div>
          }
          {props.buttonsProps && 
            <div className="flex gap-6 py-[15px]">
              {props.buttonsProps.map((buttonProp) => <Button label={buttonProp.label} action={buttonProp.action} isSpecial={buttonProp.isSpecial} />)}
            </div>
          }
          {props.arrows && 
            <div className="flex justify-around py-[15px]">
              <ArrowDownIcon className="size-icon-2xl" />
              <ArrowDownIcon className="size-icon-2xl" />
              <ArrowDownIcon className="size-icon-2xl" />
            </div>
          }
        </div>

        {/* Side section */}
        {props.sideSection &&
          <div className="overflow-hidden max-w-full">
           {props.sideSection}
          </div>
        }
      </div>

      {/* Below section */}
      {props.belowSection}

    </div>
  )
}
