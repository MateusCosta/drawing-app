import { Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Draw from "./pages/Draw";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
