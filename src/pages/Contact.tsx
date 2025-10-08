import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";
import { BaseTemplate } from "../components/common/BaseTemplate";
import { IconLoader } from "../components/svg/Icons";
import { bgBrandRoundRobin, outlineByBrandBackground, transitionClassic } from "../utils/common/brandUtils";
import { allSocials } from "../utils/common/socials";

export function ContactSide(){
  return (
    <div className="grid place-items-center pb-8">
      <div className="grid grid-cols-2 gap-4">
        {allSocials.filter((social) => !social.url.includes("github")).map((social, index) => 
          <a 
            href={social.url}
            target="_blank"
            className={`relative grid place-items-center aspect-square p-2 rounded-extra outline-3 outline-background-neutral-secondary ${transitionClassic} hover:${outlineByBrandBackground(bgBrandRoundRobin(index) as string)} ${bgBrandRoundRobin(index)}`}>
            <CursorArrowRaysIcon className="absolute top-2 right-2 size-icon-sm" />
            <div className="flex flex-col justify-center gap-2">
              <IconLoader iconAlt={social.alt} iconClassName={`h-16 w-auto ${social.customIcon ? "fill-content-neutral-primary" : "text-content-neutral-primary"}`} />
               <p className="font-semibold text-center">{social.valueAlt ?? social.alt}</p>
            </div>
          </a>
        )} 
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <BaseTemplate
      title={
        <div className="text-center">
        Always<br/>ready<br/>when you are.
        </div>
      }
      sideSection={<ContactSide />}
    />
  )
}
