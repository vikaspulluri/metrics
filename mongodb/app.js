const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortId = require('shortid');
const Activity = require('./activity.model');
const appData = require('./appData');

const app = express();
app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',"Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.post('/write', (req, res, next) => {
  const activity = new Activity({
    id: shortId.generate(),
    dcAppData: appData
  });
  activity.save().then(result => {
    res.status(201).send(result);
  }).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.use('*', (req, res, next) => {
  res.status(404).send({message: '404 not found'});
});

module.exports = app;
