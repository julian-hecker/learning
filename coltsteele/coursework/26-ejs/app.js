const express = require('express');
const app = express();
app.use(express.static('public')); // serves contents in public
app.set('view engine', 'ejs'); // tells express to use EJS, don't need .ejs extensions

app.get('/', function(req, res) {
    res.render('home', {
        who: req.ip,
    });
});



app.listen(3000, function() {
    console.log('server on localhost:3000');
});
