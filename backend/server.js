// server.js
const express = require('express');
const cors = require('cors'); // CORSを使う場合
const app = express();
const port = process.env.PORT || 5000;

// CORSの設定（必要な場合）
app.use(cors());
app.use(express.json()); // JSONリクエストを解析

// APIエンドポイントの例
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
