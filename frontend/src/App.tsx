
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/style.css';
import EntryForm from './components/EntryForm';
import Tournament from './components/Tournament';
import Menu from './components/Menu';
import AuthForm from './components/AuthForm';

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
        <Route path="/menu" element={<Menu />}/>
        <Route path="/show-tournament" element={<Tournament />}/>
        <Route path="/entry" element={<EntryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
