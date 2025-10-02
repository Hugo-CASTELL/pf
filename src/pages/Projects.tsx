import { useNavigate } from "react-router";
import { BaseTemplate } from "../components/common/BaseTemplate";
import { ProjectCard } from "../components/home/ProjectCard";
import { allProjects } from "../utils/common/projects";
import { ProjectRoute } from "../utils/routing/routes";

function ProjectsSide() {
  const navigate = useNavigate()

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col gap-4 p-4">
          {allProjects.map((project, index) => <ProjectCard key={project.title} bgType={(index+1)%5 as 1 | 2 | 3 | 4} action={() => {navigate(ProjectRoute.path.replace(":slug", project.slug))}} label={project.title} tags={project.tags} imgSrc={"https://picsum.photos/536/354"} />
          )}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <BaseTemplate
      title={"Projects shipped,\nbuilt with care,\ndesigned on point."}
      sideSection={<ProjectsSide />}
    />
  )
}
