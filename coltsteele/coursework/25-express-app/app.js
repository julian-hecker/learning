const express = require('express');
const app = express();

app.get('/', function (request, response) {
    console.log('connection on /');
    response.send('HELLO RESPONSE');
});


app.get('/about', function (req, res) {
    res.send('You have entered the danger zone. muahahahah');
});

app.get('/contact', function (req, res) {
    res.send('you cannot contact me, fools');
});

app.get('*', function (req, res) { // will override prior routes
    res.send('rip');
});


app.listen(3000, 'localhost', function () {
    console.log('server started on localhost:3000');
});
