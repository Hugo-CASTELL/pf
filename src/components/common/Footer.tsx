import { IconLoader } from "../svg/Icons";
import { ContactRoute } from "../../utils/routing/routes";
import { Link } from "react-router";
import { github, linkedin, mail, phone, type SocialProps } from "../../utils/common/socials";

const heroIconClass = "size-icon-md text-content-inverse-tertiary group-hover:text-content-inverse-secondary"
const iconClass = "size-icon-md fill-content-inverse-tertiary group-hover:fill-content-inverse-secondary"
const anchorClass = "px-1.5 cursor-pointer group"

function socialsToAnchors(socials: SocialProps[]){
  return socials.map((social) =>
          <a key={social.alt} className={anchorClass} href={social.url} target="_blank">
            <IconLoader iconAlt={social.alt} iconClassName={social.customIcon ? iconClass : heroIconClass} />
          </a>
        )
}

export function Footer(){
  return (
    <div className="w-full p-2 bg-background-inverse-primary text-center text-content-inverse-tertiary flex flex-col justify-center gap-1">
      <div className="flex justify-center items-center">
        {socialsToAnchors([github, linkedin])}
        <Link to={ContactRoute.path} className={anchorClass}><p className="text-md font-semibold">{'— Contact me —'}</p></Link>
        {socialsToAnchors([mail, phone])}
      </div>
      <a href={github.url} target="_blank" className="text-md font-semibold hover:text-content-inverse-primary cursor-pointer">Designed, built and shipped by Hugo CASTELL.</a>
    </div>
  )
}
