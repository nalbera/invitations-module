import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage";
import InvitationPage from "./pages/InvitationPage";

function App() {
  

  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/invitation" element={<InvitationPage />} />
        </Routes>
    </>
  )
}

export default App;
