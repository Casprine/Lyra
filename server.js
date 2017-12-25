const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//Connecting to the DB
mongoose.connect('mongodb://localhost:27017/lyra', {
    useMongoClient : true
});

let db = mongoose.connection;

db.on('error', err => {
    console.error('Error while trying to connect to DB');
    throw err;
});

db.once('open', () => {
    console.info('Connection to database has been opened');
});

app.use(bodyParser.json());
app.use(routes);

app.listen('5000', () => {
    console.info('Server started')
});