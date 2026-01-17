const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// API
app.get('/api/greet', (req, res) => {
  res.send('Hello World!');
});

// Serve React build
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Express 5 SPA fallback ✅
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
