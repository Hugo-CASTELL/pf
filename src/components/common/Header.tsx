import {Bars2Icon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {allRoutes} from "../../utils/routing/routes.tsx";
import {Link} from "react-router";

export function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-secondary border-b border-secondary/20">
      <div className="h-18 flex items-center justify-between px-6">
        <div className="h-full grid place-items-center">
          <h1 className="text-xl font-extrabold uppercase">Hugo Castell</h1>
        </div>
        <nav>
          <button
            className="grid md:hidden place-items-center cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ?
              <XMarkIcon className="h-6 w-6" /> :
              <Bars2Icon className="h-6 w-6" />
            }
          </button>
          <ul className="hidden md:flex space-x-4">
            {allRoutes.map((route) => (
              <li
                key={route.title}
              >
                <Link
                  to={route.path}
                  className="hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >{route.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu expands naturally */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col md:hidden px-6 pb-4 space-y-2">
          {allRoutes.map((route) => (
            <li key={route.title}>
              <Link to={route.path} className="hover:underline">{route.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}