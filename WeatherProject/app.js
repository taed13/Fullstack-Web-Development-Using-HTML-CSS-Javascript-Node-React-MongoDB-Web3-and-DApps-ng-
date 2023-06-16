const express = require('express');
const https = require('https');

const app = express();


app.get('/', (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b13318122daf19780f528b747a2a1edb&units=metric";
    https.get(url, function (response) {
        console.log(response);
    });
    res.send('Hello World');
});








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});