const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));
app.use('/styles', express.static('styles'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

console.log("Hello Docker!");