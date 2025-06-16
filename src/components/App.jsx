import { Route, Routes } from "react-router";
import AppLayout from "../pages/AppLayout.jsx";
import HomePage from "../pages/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <AppLayout />
      }>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
