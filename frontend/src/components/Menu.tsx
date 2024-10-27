import "../assets/style/Menu.css";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "../assets/style/style.css";
import { supabase } from "../utils/SupabaseClient";

interface Props {
  tournament: string;
  setTournament: Function;
}

const Menu: React.FC<Props> = ({ tournament, setTournament }) => {
  const navigate = useNavigate();

  const handleEntry = () => {
    navigate("/entry");
  };

  const handleShowTournament = () => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setTournament(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
    navigate("/show-tournament");
  };

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
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
      />
    );
  } else
    return (
      <div className="home-container">
        <h2>大会管理システム</h2>
        <div className="button-group">
          <button onClick={handleEntry}>エントリーする</button>
          <button onClick={handleShowTournament}>トーナメントを表示する</button>
        </div>
      </div>
    );
};

export default Menu;
