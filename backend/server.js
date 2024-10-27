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
        { id: 1, name: "佐藤", isSeed: true },
        { id: 2, name: "鈴木", isSeed: false },
        { id: 3, name: "高橋", isSeed: false },
        { id: 4, name: "田中", isSeed: false },
        { id: 5, name: "伊藤", isSeed: false },
        { id: 6, name: "渡辺", isSeed: false },
        { id: 7, name: "山本", isSeed: false },
        { id: 8, name: "中村", isSeed: false },
        { id: 9, name: "小林", isSeed: false }
    ]
    res.json(tournament);
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
