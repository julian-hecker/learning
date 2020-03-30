const mongoose = require('mongoose');

//               protocol://url/database
mongoose.connect('mongodb://localhost/testing')

// Creates outline for entity
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    personality: String
});

// Creates instance (document, object) from schema
// (collection, schema)
const Customer = mongoose.model("customers", customerSchema);

// const customerToSave = new Customer({
//     name: "Julian",
//     age: 20,
// });

// customerToSave.save(function(err, item) {
//     if (err) {
//         console.log("Something went wrong!\n" + err);
//     } else {
//         console.log(item + "\nSaved to Database!");
//     }
// });

Customer.find({}, (err, item) => {
    if (err) {
        console.log("===ERROR===\n" + err);
    } else {
        console.log("Items!\n" + item);
    }
});

// New Customer and Save customer both at once
Customer.create({
    name: "Julian",
    age: 20,
    personality: "Giving",
    isTrending: false
}, function(err, item) {
    if (err) {
        console.log("===ERROR===\n" + err);
    } else {
        console.log("Added to Database:\n" + item);
    }
});

