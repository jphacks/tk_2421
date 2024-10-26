import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style/style.css";
import EntryForm from "./components/EntryForm";
import CanvasTournament from "./components/CanvasTournament";
import Menu from "./components/Menu";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/show-tournament" element={<CanvasTournament />} />
          <Route path="/entry" element={<EntryForm />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
