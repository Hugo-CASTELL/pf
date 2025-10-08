import { PickUpCard } from "../components/home/PickUpCard";
import { ProjectCard } from "../components/home/ProjectCard";
import { BaseTemplate } from "../components/common/BaseTemplate";
import { useNavigate } from "react-router";
import { CareerDevelopmentRoute, ContactRoute, HobbiesRoute, ProjectRoute, ProjectsRoute } from "../utils/routing/routes";
import { portfolio, selectedProjects } from "../utils/common/projects";
import { bgBrandRoundRobin, borderByBrandBackground } from "../utils/common/brandUtils";
import { capgemini, enseeiht } from "../utils/common/tags";
import { Button } from "../components/common/Button";

function HomeSide() {
  const navigate = useNavigate()

  return (
    <div className="flex items-end justify-center">
      <PickUpCard classNameAddition={`hover:${borderByBrandBackground(bgBrandRoundRobin(0) as string)} ${bgBrandRoundRobin(0)} h-64 z-10 translate-x-20`} label="See my last project" onClick={() => navigate(ProjectRoute.path.replace(":slug", portfolio.slug))} />
      <PickUpCard classNameAddition={`hover:${borderByBrandBackground(bgBrandRoundRobin(1) as string)} ${bgBrandRoundRobin(1)} h-48 z-20 `} label="It's one fun hobby" onClick={() => navigate(HobbiesRoute.path)} />
      <PickUpCard classNameAddition={`hover:${borderByBrandBackground(bgBrandRoundRobin(3) as string)} ${bgBrandRoundRobin(3)} h-32 z-30 -translate-x-20`} label="And I love to learn" onClick={() => navigate(ProjectsRoute.path)} />
    </div>
  )
}

function HomeBelow() {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-background-neutral-secondary grid place-items-center py-10">
      <div className="w-fit flex flex-col gap-[10px]">
        <h1 className="w-full text-left text-lg font-semibold">
          Some selected projects
        </h1>
        {selectedProjects.slice(0,4).map((project, index) =>
          <ProjectCard key={project.title} bgType={index} action={() => {navigate(ProjectRoute.path.replace(":slug", project.slug))}} label={project.title} imgSrc={"https://picsum.photos/536/354"} />
        )}
        <div className="flex justify-end">
          <Button label="See all" action={() => navigate(ProjectsRoute.path)} />
        </div>
      </div>
    </div>
  )
}

export function Home() {
  const navigate = useNavigate()

  return (
    <BaseTemplate
      title={"Developer,\nskill collector,\nfocused on what matters."}
      tagsProps={[
        {knownTag:capgemini, bgType:2, action: () => {navigate(CareerDevelopmentRoute.path)}},
        {knownTag:enseeiht, bgType:3, action: () => {navigate(CareerDevelopmentRoute.path)}}
      ]}
      buttonsProps={[
        {label:"Discover my work", action:() => {navigate(ProjectsRoute.path)}},
        {label:"Get in touch", action:() => {navigate(ContactRoute.path)}, isSpecial: true},
      ]}
      sideSection={<HomeSide />}
      belowSection={<HomeBelow />}
    />
  )
}
