import { ChevronRightIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { allRoutes, HomeRoute } from "../../utils/routing/routes";
import { Link } from "react-router";
const transition = "transition-all duration-500 ease-in-out"

export function Header () {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header className={`w-full min-h-18 ${transition} ${isMobileMenuOpened ? 'bg-background-neutral-primary' : 'bg-background-neutral-primary/50 backdrop-blur-3xl'} px-6`}>
      <div className="w-full h-18 flex justify-between items-center">
        <Link to={HomeRoute.path} className={`${transition} ${isMobileMenuOpened ? 'text-transparent' : 'cursor-pointer text-content-neutral-secondary hover:text-content-neutral-primary' } uppercase tracking-spaced font-bold`}>
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
      <nav className={`w-full text-2xl tracking-normal font-bold flex flex-col ${transition} ${isMobileMenuOpened ? 'h-screen' : 'h-0'}`}>
        {isMobileMenuOpened && allRoutes.map((route, index) => {
          return (
            <Link 
              to={route.path}
              onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
              key={route.title}
              className={`flex justify-between items-center text-content-neutral-secondary hover:text-content-neutral-primary group cursor-pointer py-1 animate-fade-in-from-top`}
              style={{ animationDelay: `${25 * index}ms` }}
            >
              {route.title}
              <ChevronRightIcon className={`size-icon-2xl ${transition} stroke-transparent group-hover:stroke-content-neutral-primary`} />
            </Link>
          )
        })}
      </nav>
    </header>
  );
}
