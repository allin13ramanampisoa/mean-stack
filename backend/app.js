const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const stuffRoute = require('./routes/stuffRoute');
const userRoute = require('./routes/userRoute');
const path = require('path');

mongoose.connect();

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoute);
app.use('/api/auth', userRoute);

//  POUR LES FICHIER
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
