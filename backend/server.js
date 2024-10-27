// server.js
const express = require("express");
const cors = require("cors"); // CORSを使う場合
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const SupabaseUrl = process.env.SUPABASE_URL;
const SupabaseKey = process.env.SUPABASE_KEY;

//console.log(SupabaseKey);
//console.log(SupabaseUrl);
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SupabaseUrl, SupabaseKey);

const fetchUsers = async () => {
  const data = await supabase.from("t_users").select();
  const list = [];
  data.data.map((item) => {
    list.push({ id: item.id, name: item.user_name, isSeed: false });
  });
  //console.log(result);
  //console.log(Array.isArray(result));
  if (data.data[0].match_number === null) {
    const result = shuffle(list);
    return result;
  } else {
    return list;
  }
};

// CORSの設定（必要な場合）
app.use(cors());
app.use(express.json()); // JSONリクエストを解析

const shuffle = (array) => {
  const clone = [...array];

  for (let i = clone.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let tmp = clone[i];
    clone[i] = clone[rand];
    clone[rand] = tmp;
  }

  return clone;
};

// APIエンドポイントの例
app.get("/api/tournament", async (req, res) => {
  //   const tournament = [
  //     { id: 1, name: "佐藤", isSeed: true },
  //     { id: 2, name: "鈴木", isSeed: false },
  //     { id: 3, name: "高橋", isSeed: false },
  //     { id: 4, name: "田中", isSeed: false },
  //     { id: 5, name: "伊藤", isSeed: false },
  //     { id: 6, name: "渡辺", isSeed: false },
  //     { id: 7, name: "山本", isSeed: false },
  //     { id: 8, name: "中村", isSeed: false },
  //     { id: 9, name: "小林", isSeed: false },
  //   ];
  const users = await fetchUsers();
  console.log(users);
  res.json(users);
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
