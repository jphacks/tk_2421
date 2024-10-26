// server.js
const express = require('express');
const cors = require('cors'); // CORSを使う場合
const app = express();
const port = process.env.PORT || 5000;

// CORSの設定（必要な場合）
app.use(cors());
app.use(express.json()); // JSONリクエストを解析

// APIエンドポイントの例
app.get('/api/tournament', (req, res) => {
    const tournament = [
        { id: 1, name: "佐藤" },
        { id: 2, name: "鈴木" },
        { id: 3, name: "高橋" },
        { id: 4, name: "田中"}
    ]
    res.json(tournament);
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
