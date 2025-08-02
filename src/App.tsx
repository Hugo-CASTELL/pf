import {Route, Routes} from "react-router";
import {Header} from "./components/common/Header.tsx";
import {allRoutes} from "./utils/routing/routes.tsx";

function App() {
  return (
    <div className={"h-screen w-screen flex flex-col font-inter"}>
      <span id="spacer-header" className={"relative h-18"} />
      <div className={"fixed h-18 w-full"}>
        <Header />
      </div>
      <div className={"flex-1"}>
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
    </div>
  )
}

export default App
