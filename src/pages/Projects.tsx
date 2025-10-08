import { useNavigate, useSearchParams } from "react-router";
import { BaseTemplate } from "../components/common/BaseTemplate";
import { ProjectCard } from "../components/home/ProjectCard";
import { allProjects, type Project } from "../utils/common/projects";
import { ProjectRoute } from "../utils/routing/routes";
import { Tag } from "../components/common/Tag";
import { type KnownTag, projects_tags } from "../utils/common/tags";
import { useEffect, useState } from "react";

interface FilterTag {
  knownTag: KnownTag,
  isActive: boolean,
}

function ProjectsSide() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [tags, setTags] = useState<FilterTag[]>()
  const [projects, setProjects] = useState<Project[]>()

  const switchTag = (tag: FilterTag) => {
    if(tags?.length) {
      const activeTabsNumber = tags.filter(t => t.isActive).length
      if(activeTabsNumber == projects_tags.length)    setSearchParams({ tags: tag.knownTag.label.toLowerCase() })
      else if (activeTabsNumber == 1 && tag.isActive) setSearchParams({})
      else {
        // Otherwise → toggle tag in the list
        const activeLabels = tags
          .filter(t => t.isActive && !(t.knownTag.label === tag.knownTag.label && tag.isActive)) // remove if clicked active
          .map(t => t.knownTag.label.toLowerCase());

        // If user clicked on an inactive tag, add it
        if (!tag.isActive) {
          activeLabels.push(tag.knownTag.label.toLowerCase());
        }

        setSearchParams({ tags: activeLabels.join("-") });
      }
    }
  }

  useEffect(() => {

    const tagsLabels = searchParams.get("tags")?.split('-').filter(l => l !== '') ?? []
    const findInTagsLabels = (tag: KnownTag) => tagsLabels.find((l) => l.toLowerCase() == tag.label.toLowerCase()) !== undefined
    const filteringTags = tagsLabels.length ? projects_tags.filter((t) => findInTagsLabels(t)) : 
                                              projects_tags
    const nextTags: FilterTag[] = projects_tags.map((t) => { return { knownTag: t, isActive: tagsLabels.length !== 0 && filteringTags.length < projects_tags.length ? findInTagsLabels(t) : true } as FilterTag } )
    const nextProjects = filteringTags.length !== projects_tags.length ? allProjects.filter((p) => filteringTags.every((t) => p.tags.find((tp) => tp.label.toLowerCase() == t.label.toLowerCase()))) : 
                                                                         allProjects
    setTags(nextTags)
    setProjects(nextProjects)

  }, [searchParams])

  return (
    <div className="flex flex-col place-items-center">
      <div className="flex flex-col gap-4 pb-4">
        <h3 className="font-semibold">Filters</h3>
        <div className="w-full flex gap-2 mb-4">
          {tags && tags.map((filterTag, index) => <Tag key={filterTag.knownTag.label} knownTag={filterTag.knownTag} bgType={index} darken={!filterTag.isActive} action={() => {switchTag(filterTag)}} />)}
        </div>
        {projects && projects.map((project, index) => <ProjectCard key={project.title} bgType={index} action={() => {navigate(ProjectRoute.path.replace(":slug", project.slug))}} label={project.title} tags={project.tags} imgSrc={"https://picsum.photos/536/354"} />
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
