require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require("./controllers/users");
const ClothesController = require("./controllers/clothes");
const OrdersController = require("./controllers/order");

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/fullstack-jeopardy

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});




// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));
app.use('/api/users', UsersController);
app.use('/api/clothes', ClothesController);
app.use('/api/order', OrdersController);

app.get('/', (req,res) => {
    res.send('Hello world!');
    res.sendFile(__dirname + "/client/build/index.html");
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT);
})