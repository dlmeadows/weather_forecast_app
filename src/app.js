const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'David',
            age: 27,
        },
        {
            name: 'Paula',
            age: 32
        }]);
});

app.get('/about', (req, res) => {
    res.send('<h1>About Weather App</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        location: "Jacksonville",
        forecast: "It's HOT!",
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
