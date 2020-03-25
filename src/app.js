const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

console.log(__dirname)
console.log(path.join(__dirname, '../public'));

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        location: "Jacksonville",
        forecast: "It's HOT!",
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
