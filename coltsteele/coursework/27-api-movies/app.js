const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let movies = [];

app.get('/', (req, res) => {
    res.render('home', {
        movies: movies,
    });
});

app.post('/', (req, res) => {
    const search = req.body.search;
    const page = req.body.page;

    axios({
        url: 'http://www.omdbapi.com/',
        method: 'GET',
        params: {
            s: search,
            apikey: 'thewdb',
            page: page | 1,
        },
        json: true,
    })
        .then(response => {
            const results = response.data;
            const total = results.totalResults;
            const movieResults = results.Search;
            movies = movieResults;
            // console.log(movies);
            return movieResults;
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            res.redirect('/');
        });
});

app.listen(3000, () => {
    console.log('server started on :3000');
});
