import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/EntryForm.css";
import { supabase } from "../utils/SupabaseClient";

const EntryForm: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>("");

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`エントリーされた選手名: ${playerName}`);
    const { error } = await supabase
      .from("t_users")
      .insert({ user_name: playerName, status: 2 });
    if (error) {
      throw error; // 挿入に失敗した場合はエラーを投げる
    }
    setPlayerName(""); // フォームをリセット
    //const data = await supabase.auth.getUser();
    //console.log(await data);
    //console.log((await data).data.user?.id);
    navigate("/menu");
  };

  return (
    <div className="entry-form-container">
      <h2>大会エントリーフォーム</h2>
      <form onSubmit={handleSubmit}>
        <label>
          選手の氏名:
          <input
            type="text"
            value={playerName}
            onChange={handleInputChange}
            placeholder="氏名を入力"
            required
          />
        </label>
        <button type="submit">エントリー</button>
      </form>
    </div>
  );
};

export default EntryForm;
