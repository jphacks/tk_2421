import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style/T_comps.css";
import EntryForm from "./components/EntryForm";
import Tournament from "./components/Tournament";
import Menu from "./components/Menu";
import AuthForm from "./components/AuthForm";

function App() {
  const [tournament, setTournament] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route
          path="/menu"
          element={
            <Menu setTournament={setTournament} />
          }
        />
        <Route
          path="/show-tournament"
          element={<Tournament tournament={tournament} />}
        />
        <Route path="/entry" element={<EntryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
