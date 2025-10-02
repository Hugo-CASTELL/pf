import { useParams } from "react-router";
import { ProjectTemplate } from "./ProjectTemplate";
import { Projects } from "../../pages/Projects";
import { allProjects } from "../../utils/common/projects";

export function ProjectLoader() {
  let params = useParams()
  if(params.slug) {
    let project = allProjects.find((p) => p.slug == params.slug)
    if(project !== undefined){
      return (
        <ProjectTemplate 
          projectTitle={project.title}
          projectTags={project.tags}
        />
      )
    }
  }
  return <Projects />
}
