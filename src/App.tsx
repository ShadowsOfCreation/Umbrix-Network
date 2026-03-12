import Sidebar from "./components/Sidebar"
import Hub from "./pages/Hub"
import "./App.css"

function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#f5f5f5",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "32px",
          boxSizing: "border-box",
        }}
      >
        <Hub />
      </main>
    </div>
  )
}

export default App