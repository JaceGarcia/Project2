require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../Models/users');
const Order = require('../Models/order');
const Clothes = require('../Models/clothes');

User.remove({}, (err) => console.log(err));
Order.remove({}, (err) => console.log(err));
Clothes.remove({}, (err) => console.log(err));

//Users
const richard = new User({
    first_name: 'Richard',
    last_name: 'Kim',
    email: 'richardk88@hotmail.com',
    order: []
});

const david = new User({
    first_name: 'David',
    last_name: 'Kim',
    email: 'djs.kims@gmail.com',
    order: []
});

const jace = new User({
    first_name: 'Jace',
    last_name: 'Garcia',
    email: 'jaces.place@gmail.com',
    order: []
});

const hunter = new User({
    first_name: 'Hunter',
    last_name: 'Macafee',
    email: 'hunter.macafee@gmail.com',
    order: []
});

const sussie = new User({
    first_name: 'Sussie',
    last_name: 'Barnwell',
    email: 'sussie.barnwell@gmail.com',
    order: []
});

const danny = new User({
    first_name: 'Danny',
    last_name: 'Hurrly',
    email: 'danny.hurrly@gmail.com',
    order: []
});

// orders
const orders = new Order({
   clothes: []
});

//clothes
const grey_shirt = new Clothes({
    name: 'Grey Shirt',
    imgUrl: 'http://i.imgur.com/Rimthyq.jpg',
    size: ['XS', 'S', 'M','L','XL','2XL'],
    color: 'Grey',
    gender: ['Male', 'Female', 'Unisex'],
    age_group: ['Adult', 'Kid'],
    price: 19.99,
    quantity: 0
});

const black_shirt = Clothes({
    name: 'Black Shirt',
    imgUrl: 'http://i.imgur.com/r5LANBR.jpg',
    size: ['XS', 'S', 'M','L','XL','2XL'],
    color: 'Black',
    gender: ['Male', 'Female', 'Unisex'],
    age_group: ['Adult', 'Kid'],
    price: 19.99,
    quantity: 0
});

richard.save(function(err) {
    if (err) console.log(err);

    console.log('Richard created!');
});

david.save(function(err) {
    if (err) console.log(err);

    console.log('David created!');
});

jace.save(function(err) {
    if (err) console.log(err);

    console.log('Jace created!');
});
hunter.save(function(err) {
    if (err) console.log(err);

    console.log('Hunter created!');
});

sussie.save(function(err) {
    if (err) console.log(err);

    console.log('Sussie created!');
});

danny.save(function(err) {
    if (err) console.log(err);

    console.log('Danny created!');
});

black_shirt.save(function(err) {
    if (err) console.log(err);

    console.log('Black Shirt created!');
});

grey_shirt.save(function(err) {
    if (err) console.log(err);

    console.log('Grey shirt created!');
});
mongoose.connection.close();