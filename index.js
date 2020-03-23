// note that this is old syntax
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const BlogPost = require('./database/models/blogPost');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bananas', { useNewUrlParser: true }).then(() => console.log('MongoDB Connected . . .')).catch(err => console.log(err));

// import express from 'express';
const app = express();

// middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// tell the app to use the routes
app.use(routes);

const port = process.env.PORT || 4000;

function listeningSuccess() {
  console.log('Server is running on port: ', port);
  console.log('I started listening');
}

// if on heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(port, listeningSuccess);