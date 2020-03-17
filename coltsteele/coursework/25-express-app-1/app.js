const express = require('express');
const app = express();
const speak = {
    pig: 'oink',
    cow: 'moo',
    dog: 'woof',
};


app.get('/', function (req, res) {
    res.send('hello, welcome to the thingie!');
});

app.get('/speak/:animalName/', function (req, res) {
    const animalSound = speak[req.params.animalName]
    res.send(animalSound);
});

app.get('speak/*', function(req, res) {
    const animal = req.params.animalName
    res.send('')
});


app.get('/repeat/:item/:qty', function (req, res) {
    const item = req.params.item;
    const qty = req.params.qty;
    let output = '';
    for (let i = 0; i < qty; i++) {
        output += item + ' ';
    }
    res.send(output);
});


app.get('*', function (req, res) {
    res.send('404 -- Page Not Found!');
});


app.listen(3000, 'localhost', function (req, res) {
    console.log('server started on localhost:3000');
});
