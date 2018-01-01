const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const secrets = require('./secrets');

const app = express();

//Connecting to the DB
mongoose.connect(`mongodb://${secrets.databaseUsername}:${secrets.databasePassword}@ds163494.mlab.com:63494/lyra`, {
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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});