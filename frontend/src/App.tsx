import { useEffect, useState } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style/style.css";
import EntryForm from "./components/EntryForm";
import CanvasTournament from "./components/CanvasTournament";
import Menu from "./components/Menu";
import AuthForm from './components/AuthForm';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  //const [message, setMessage] = useState("");
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />}/>
        <Route path="/show-tournament" element={<CanvasTournament />}/>
        <Route path="/entry" element={<EntryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
