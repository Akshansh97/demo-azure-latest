const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.send('Hello World!');
})

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
