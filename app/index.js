const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.arguments('/styles', express.static(path.join(__dirname, '/styles')));

app.use('/src', express.static(path.join(__dirname, '../src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

console.log("Hello Docker!");