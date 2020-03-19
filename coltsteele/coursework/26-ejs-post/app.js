const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
// allows using assets from public directory
app.use(express.static('public'));
// used for parsing incoming 'body' form values
app.use(bodyParser.urlencoded({ extended: true }));


const friends = ["Valeria", "Owen", "Freddie", "Josh", "Ian", "Jerry", "Alex"];




app.get('/', function (req, res) {
    res.render('home');
});

app.get('/friends', function (req, res) {
    res.render('friends', { friends: friends });
});

app.post('/addFriend', (req, res) => {
    const newFriend = req.body.friendName;
    console.log(newFriend);
    friends.push(newFriend);
    res.redirect('./friends'); // normally need to pass object
});

app.listen(3000, function () {
    console.log("Server started on :3000!");
});