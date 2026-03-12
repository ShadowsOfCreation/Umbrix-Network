import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Hub from "./pages/Hub"
import "./App.css"
import { getModuleUI } from "./core/modules/ui-registry"

function App() {
  const [activePage, setActivePage] = useState("hub")

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#f5f5f5",
      }}
    >
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main
        style={{
          flex: 1,
          padding: "32px",
        }}
      >
        {activePage === "hub" && <Hub />}

        {activePage === "settings" && (
          <div>
            <h2>Settings</h2>
            <p>Umbrix settings will live here.</p>
          </div>
        )}

        {activePage !== "hub" && activePage !== "settings" && (() => {
          const module = getModuleUI(activePage)

          if (!module) {
            return <p>Module UI not registered.</p>
          }

          const Component = module.component
          return <Component />
        })()}
      </main>
    </div>
  )
}

export default App