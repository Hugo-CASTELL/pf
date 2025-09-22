import { Button } from "../components/common/Button";
import { Tag } from "../components/common/Tag";
import capgemini_logo from "../assets/img/capgemini_logo.png"
import enseeiht_logo from "../assets/img/ENSEEIHT_logo.png"
import { PickUpCard } from "../components/home/PickUpCard";
import { ProjectCard } from "../components/home/ProjectCard";
import { BaseTemplate } from "../components/common/BaseTemplate";

function HomeSide() {
  return (
    <div className="flex items-end justify-center">
      <PickUpCard classNameAddition="hover:border-ice-300 bg-background-brand-primary h-64 z-10 translate-x-20" label="See my last project" />
      <PickUpCard classNameAddition="hover:border-moss-300 bg-background-brand-secondary h-48 z-20 " label="It's one fun hobby" />
      <PickUpCard classNameAddition="hover:border-pastel-300 bg-background-brand-tertiary h-32 z-30 -translate-x-20" label="And I love to learn" />
    </div>
  )
}

function HomeBelow() {
  return (
    <div className="w-full bg-background-neutral-secondary grid place-items-center py-10">
      <div className="w-fit flex flex-col gap-[10px]">
        <h1 className="w-full text-left text-lg font-semibold">
          Some selected projects
        </h1>
        <ProjectCard bgType={1} label="This portfolio" imgSrc={"https://picsum.photos/536/354"} />
        <ProjectCard bgType={2} label="Parcoursup-like" imgSrc={"https://picsum.photos/536/355"} />
        <ProjectCard bgType={4} label="Microprocessor from logic" imgSrc={"https://picsum.photos/536/356"} />
        <ProjectCard bgType={3} label="Blind test online game" imgSrc={"https://picsum.photos/536/357"} />
      </div>
    </div>
  )
}

export function Home() {
  return (
    <BaseTemplate
      title={"Developer,\nskill collector,\nfocused on what matters."}
      tagsProps={[
        {label:"Capgemini Engineering", imgSrc:capgemini_logo, bgType:4},
        {label:"ENSEEIHT", imgSrc:enseeiht_logo, bgType:3}
      ]}
      buttonsProps={[
        {label:"Discover my work", action:() => {}},
        {label:"Get in touch", action:() => {}, isSpecial: true},
      ]}
      sideSection={<HomeSide />}
      belowSection={<HomeBelow />}
    />
  )
}

export function HomeOld() {
  return (
    <div className="flex flex-col gap-[18px]">

      {/* Hero */}
      <div className="w-full bg-background-neutral-secondary flex flex-col gap-10 justify-center items-center pt-10">

        {/* Title section */}
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-2xl font-semibold">
            Developer, <br />
            skill collector, <br />
            focused on what matters.
          </h1>
          <div className="flex gap-4">
            <Tag label="Capgemini Engineering" imgSrc={capgemini_logo} bgType={4} />
            <Tag label="ENSEEIHT" imgSrc={enseeiht_logo} bgType={3} />
          </div>
          <div className="flex gap-6 py-[15px]">
            <Button label="Discover my work" action={() => {}} />
            <div className="relative">
              <Button label="Get in touch" action={() => {}} />
              <div className="absolute top-0 left-0 -translate-1/2 size-[30px] rounded-full bg-background-neutral-secondary" />
              <div className="absolute bottom-0 right-0 translate-1/2 size-[30px] rounded-full bg-background-neutral-secondary" />
            </div>
          </div>
        </div>

        {/* Card section */}
        <div className="overflow-hidden max-w-full">
          <div className="flex items-end justify-center">
            <PickUpCard classNameAddition="hover:border-ice-300 bg-background-brand-primary h-64 z-10 translate-x-20" label="See my last project" />
            <PickUpCard classNameAddition="hover:border-moss-300 bg-background-brand-secondary h-48 z-20 " label="It's one fun hobby" />
            <PickUpCard classNameAddition="hover:border-pastel-300 bg-background-brand-tertiary h-32 z-30 -translate-x-20" label="And I love to learn" />
          </div>
        </div>
      </div>

      {/* Selected projects */}
      <div className="w-full bg-background-neutral-secondary grid place-items-center py-10">
        <div className="w-fit flex flex-col gap-[10px]">
          <h1 className="w-full text-left text-lg font-semibold">
            Some selected projects
          </h1>
          <ProjectCard bgType={1} label="This portfolio" imgSrc={"https://picsum.photos/536/354"} />
          <ProjectCard bgType={2} label="Parcoursup-like" imgSrc={"https://picsum.photos/536/355"} />
          <ProjectCard bgType={4} label="Microprocessor from logic" imgSrc={"https://picsum.photos/536/356"} />
          <ProjectCard bgType={3} label="Blind test online game" imgSrc={"https://picsum.photos/536/357"} />
        </div>
      </div>


    </div>
  )
}
