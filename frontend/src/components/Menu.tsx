import "../assets/style/Menu.css";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "../assets/style/T_comps.css";
import { supabase } from "../utils/SupabaseClient";

function Menu() {
  const navigate = useNavigate();

  const handleEntry = () => {
    navigate("/entry");
  };

  const handleCreateTournament = () => {
    navigate("/create-tournament");
  };

  const handleShowTournament = () => {
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
          <button onClick={handleCreateTournament}>
            トーナメントを作成する
          </button>
        </div>
      </div>
    );
}

export default Menu;
