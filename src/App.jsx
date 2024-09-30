import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import Settings from "./pages/Settings"




function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Dashboard />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>

    </div>
  )
}

export default App
