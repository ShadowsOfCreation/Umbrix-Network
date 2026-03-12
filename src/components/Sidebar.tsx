import { getRegisteredModules } from "../core/modules/registry"

export default function Sidebar() {
  const modules = getRegisteredModules()
    .filter((module) => module.navigation)
    .sort((a, b) => (a.navigation?.order ?? 999) - (b.navigation?.order ?? 999))

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#101010",
        borderRight: "1px solid #222",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Umbrix</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button>Hub</button>

        {modules.map((module) => (
          <button key={module.id}>{module.navigation?.label}</button>
        ))}

        <button>Settings</button>
      </nav>
    </div>
  )
}