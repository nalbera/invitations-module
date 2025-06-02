import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  

  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    </>
  )
}

export default App
