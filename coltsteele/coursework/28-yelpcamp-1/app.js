const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const campgrounds = [
    { name: "tall hill", image: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png' },
    { name: "small river", image: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png' },
    { name: "big man", image: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png' }
];


app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {
        campgrounds: campgrounds,
    });
});

app.post('/campgrounds', (req, res) => { // same name as get route
    const name = req.body.name;
    const image = req.body.image;
    const newCamp = { name: name, image: image };
    campgrounds.push(newCamp);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(3000, () => {
    console.log('Server Started on :3000');
});
