import React, { lazy, Suspense } from "react"
import "./App.css"
import { Loader } from "./components"

const Routes = lazy(() =>
  import("./routes").then(module => ({
    default: module.default,
  }))
)

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <Loader
              width="100%"
              height="100%"
              type="spinner"
              withBackground={false}
              iconSize={1.5}
              style={{ position: "fixed" }}
            />
          </div>
        }
      >
        <Routes />
      </Suspense>
    </div>
  )
}

export default App
