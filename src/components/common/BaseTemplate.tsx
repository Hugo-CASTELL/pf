import { ArrowDownIcon } from "@heroicons/react/16/solid"
import type { ReactNode } from "react"
import { Button, type ButtonProps } from "./Button"
import { Tag, type TagProps } from "./Tag"

interface BaseTemplateProps {
  title: String | ReactNode,
  tagsProps?: TagProps[],
  buttonsProps?: ButtonProps[],
  centerAttributes?: boolean,
  arrows?: boolean,
  sideSection?: ReactNode,
  belowSection?: ReactNode,
  titleOpticalOffset?: boolean,
}

export function BaseTemplate(props: BaseTemplateProps) {
  return (
    <div className={`flex flex-col ${props.belowSection ? "gap-[18px]" : "flex-1"}`}>

      {/* Hero */}
      <div className={`w-full ${props.sideSection ? props.belowSection ? "min-h-[600px] desktop:px-16" : "h-full desktop:px-desktop-padding" : "pb-10"} bg-background-neutral-secondary flex flex-col gap-10 justify-between items-center pt-10  desktop:flex-row desktop:gap-0 desktop:justify-around`}>

        {/* Title section */}
        <div className={`desktop:relative ${props.belowSection ? "desktop:w-1/2" : "desktop:w-full"} desktop:grid desktop:place-items-center ${props.titleOpticalOffset ? "desktop-optical-offset" : ""}`}>
        <div className="flex flex-col gap-[10px] min-w-[360px]">
          <h1 className="text-2xl font-semibold whitespace-pre-line">
            {props.title}
          </h1>
          {props.tagsProps && 
            <div className={`flex gap-4 ${props.centerAttributes ? "justify-center": "justify-start"}`}>
              {props.tagsProps.map((tagProp) => <Tag key={tagProp.knownTag?.label ?? tagProp.customLabel} knownTag={tagProp.knownTag} customLabel={tagProp.customLabel} bgType={tagProp.bgType} action={tagProp.action} />)}
            </div>
          }
          {props.buttonsProps && 
            <div className={`flex gap-6 py-[15px] ${props.centerAttributes ? "justify-center": "justify-start"}`}>
              {props.buttonsProps.map((buttonProp) => <Button key={buttonProp.label} label={buttonProp.label} action={buttonProp.action} isSpecial={buttonProp.isSpecial} />)}
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
        </div>

        {/* Side section */}
        {props.sideSection &&
          <div className={`overflow-visible ${props.belowSection ? "max-w-full desktop:h-full" : "h-full w-full"}`}>
           {props.sideSection}
          </div>
        }
      </div>

      {/* Below section */}
      {props.belowSection}

    </div>
  )
}
