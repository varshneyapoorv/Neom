import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import Settings from "./pages/Settings"
import MyFavorites from "./pages/MyFavorites"




function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Dashboard />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/favorites" element={<MyFavorites />} />
      </Routes>

    </div>
  )
}

export default App
