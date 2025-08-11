import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { GithubIcon, LinkedInIcon } from "../svg/Icons";
import { links } from "../../utils/routing/links";
import { ContactRoute } from "../../utils/routing/routes";
import { Link } from "react-router";

const heroIconClass = "size-icon-md text-content-inverse-tertiary group-hover:text-content-inverse-secondary"
const iconClass = "size-icon-md fill-content-inverse-tertiary group-hover:fill-content-inverse-secondary"
const anchorClass = "px-1.5 cursor-pointer group"

export function Footer(){
  return (
    <div className="w-full h-[65px] bg-background-inverse-primary text-center text-content-inverse-tertiary flex flex-col justify-center gap-1">
      <div className="flex justify-center items-center">
        {
          [
            [links["GITHUB"], <GithubIcon iconClassName={iconClass} />],
            [links["LINKEDIN"], <LinkedInIcon iconClassName={iconClass} />],
            [ContactRoute.path, <p className="text-md font-semibold">{'— Contact me —'}</p>],
            [links["MAIL"], <EnvelopeIcon className={heroIconClass} />],
            [links["PHONE"], <PhoneIcon  className={heroIconClass} />],
          ].map((a) => {
              let url: string = a[0].toString()
              let content = a[1]
              if(url.startsWith("http")) {
                return <a key={url} className={anchorClass} href={url} target="_blank">{content}</a>
              } else {
                return <Link key={url} className={anchorClass} to={url}>{content}</Link>
              }
            }
               )

        }
      </div>
      <p className="text-md font-semibold">
        Designed, built and shipped by Hugo CASTELL. More on <a href={links["GITHUB"]} target="_blank" className="text-content-inverse-secondary hover:text-content-inverse-primary cursor-pointer">Github</a>.
      </p>
    </div>
  )
}
