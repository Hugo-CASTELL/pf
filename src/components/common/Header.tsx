import { ChevronRightIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { allRoutes, HomeRoute } from "../../utils/routing/routes";
import { Link } from "react-router";
import { selectedSocials } from "../../utils/common/socials";
import { IconLoader } from "../svg/Icons";
import arrow_up from "../../assets/common/arrow-up.png"
import { transitionFast } from "../../utils/common/brandUtils";

export function Header () {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header className={`w-full min-h-18 ${transitionFast} ${isMobileMenuOpened ? 'bg-background-neutral-primary' : 'bg-background-neutral-primary/50 backdrop-blur-3xl'} px-6`}>
      <div className="w-full h-18 flex justify-between items-center">
        <Link to={HomeRoute.path} className={`${transitionFast} ${isMobileMenuOpened ? 'text-transparent' : 'cursor-pointer text-content-neutral-secondary hover:text-content-neutral-primary' } uppercase tracking-spaced font-bold`}>
          Hugo Castell
        </Link>
        <button 
          className="cursor-pointer"
          onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        >
          {isMobileMenuOpened ? <XMarkIcon className="size-icon-md" /> :
                                <Bars2Icon className="size-icon-md" /> }
        </button>
      </div>
      <nav className={`w-full text-2xl tracking-normal font-bold flex flex-col ${transitionFast} ${isMobileMenuOpened ? 'h-screen' : 'h-0'}`}>
        {isMobileMenuOpened && allRoutes.map((route, index) => {
          if(!route.path.includes(":"))
            return (
              <Link 
                to={route.path}
                onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
                key={route.title}
                className={`flex justify-between items-center text-content-neutral-secondary hover:text-content-neutral-primary group cursor-pointer py-1 animate-fade-in-from-top`}
                style={{ animationDelay: `${25 * index}ms` }}
              >
                {route.title}
                <ChevronRightIcon className={`size-icon-2xl ${transitionFast} stroke-transparent group-hover:stroke-content-neutral-primary`} />
              </Link>
            )
        })}
        {isMobileMenuOpened && 
          <div className="relative w-fit flex justify-start items-center">
            {selectedSocials.map((social, index) => {
              let style = `w-6 h-6 ${transitionFast} group-hover:opacity-100`
              let heroIconClass = style + ` text-content-neutral-secondary group-hover:text-content-neutral-primary`
              let customIconClass = style + ` fill-content-neutral-tertiary group-hover:fill-content-neutral-primary`
              return (
                <a 
                  href={social.url}
                  target="_blank"
                  onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
                  key={social.alt}
                  className={`group cursor-pointer animate-fade-in-from-top pr-4 py-3`}
                  style={{ animationDelay: `${25 * (allRoutes.length + index)}ms` }}
                >
                  <IconLoader iconAlt={social.alt} iconClassName={social.customIcon ? customIconClass : heroIconClass} />
                </a>
              )
            })}
            <div
              className="absolute -bottom-3 -right-1 animate-fade-in-from-top"
              style={{ animationDelay: `${25 * (allRoutes.length + selectedSocials.length)}ms` }}
            >
              <img 
                alt="arrow from icon to resume indication" 
                src={arrow_up}
                className="relative w-6 h-6 -rotate-70 scale-x-[-1] opacity-35"
              />
              <p className="absolute -top-1 left-7 w-50 font-caveat text-xl text-content-neutral-tertiary opacity-35">my resume</p>
            </div>
          </div>
        }
      </nav>
    </header>
  );
}
