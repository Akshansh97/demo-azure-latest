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

// Serve frontend static files
const frontendPath = path.join(__dirname, 'frontend/dist');
app.use(express.static(frontendPath));

// React SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
