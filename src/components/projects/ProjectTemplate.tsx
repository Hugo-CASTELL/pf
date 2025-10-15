import { type TagProps } from "../common/Tag"
import { BaseTemplate } from "../common/BaseTemplate"
import type { KnownTag } from "../../utils/common/tags"

interface ProjectTemplateProps {
  projectTitle: string,
  projectTags: KnownTag[],
  children?: React.ReactNode
}

function ProjectSide() {
  return (
    <div />
  )
}

export function ProjectTemplate(props: ProjectTemplateProps) {
  return (
    <BaseTemplate
      title={
          <>
            Wonder how I made <br />
            <span className="relative">
              <span className="relative z-10">{props.projectTitle},</span>
              <div className="absolute z-0 bottom-0 left-1 right-2 h-2/3 bg-background-neutral-tertiary" />
            </span><br />
            You are at the right place.
          </>
        }
      tagsProps={
        Array.from(props.projectTags.slice(0, 3).map((tag, index) => {
          let prop: TagProps = {knownTag: tag, bgType:index == 0 ? 3 : index == 1 ? 1 : 0}
          return prop
        }).values())
      }
      arrows={true}
      sideSection={<ProjectSide />}
      belowSection={props.children}
    />
  )
}
