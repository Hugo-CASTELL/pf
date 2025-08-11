import {Route, Routes} from "react-router";
import {Header} from "./components/common/Header.tsx";
import {allRoutes} from "./utils/routing/routes.tsx";
import { Footer } from "./components/common/Footer.tsx";

function App() {
  
  return (
    <div className={"font-inter text-md tracking-normal bg-background-neutral-primary"}>
      <div className={"flex flex-col"}>
        <span className={"min-h-18"} />
        <div className={"fixed h-18 w-full z-50"}>
          <Header />
        </div>
        <div className={"flex-1 z-0"}>
          <Routes>
            {allRoutes.map((route) => (
              <Route
                key={route.title}
                path={route.path}
                element={route.element()}
              />
            ))}
          </Routes>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
