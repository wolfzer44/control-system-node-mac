'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const routes = require('./routes/index');


//SETTINGS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//ROUTES
app.use('/api/v1/control', routes.api);


app.listen(3333, function() {
    console.log('listen in port: 3333');
})
