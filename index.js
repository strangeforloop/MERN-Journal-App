// note that this is old syntax
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const BlogPost = require('./database/models/blogPost');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bananas', { useNewUrlParser: true });

// import express from 'express';
const app = express();

// middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// tell the app to use the routes
app.use(routes);

// app.post('/post', function (req, res) {
//   // -- the following lines can be replaced by create
//   // var blogPost = new BlogPost(req.body);
//   // // save the info coming back into the db i the BlogPost collection
//   // blogPost.save();

//   console.log('req.body', req.body);
//   // console.log(req);
//   BlogPost.create(req.body).then(function (blogPost) {
//     res.send(blogPost);
//   }).catch(function (e) {
//     console.error('Error:', e.message);
//     res.status(418).json({ error: "ERRORRRRRRR" });
//   });

  //   res.send({ 
  //     requestType: 'POST', 
  //     name: req.body.name,
  //     rank: req.body.rank
  //   });
  //   console.log(req.body);
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "../frontend/build/index.html"));
// });

const port = process.env.PORT || 4000;

// function testRequest(req, res) {
//   res.send('ping pong');
// }

// function handleGetHome(req, res) {
//   console.log('home');  // this will appear in the terminal
//   res.send({name: 'Anna'});
// }

// function handlePostRequests(req, res) {
//   res.send('POST request to the posts page');
// }

// // sends get request to a sample route
// app.get('/ping', testRequest);

// // sends a get request to the home page
// app.get('/', handleGetHome);

// // send a post request to the posts page
// app.post('/posts', handlePostRequests);

function listeningSuccess() {
  console.log('Server is running on port: ', port);
  console.log('I started listening');
}

// if on heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

// listens for any type of requests
app.listen(port, listeningSuccess);

// package.json start script
// "start": "nodemon --experimental-modules index.js",


// "start": "node index.js && echo \"23432423423424\" && npm run heroku-postbuild",
//   "build": "echo \"running build. . . .\" && cd ../frontend && npm run build",
//     "install-client": "echo \"Running install-client . . . .\" && cd ../frontend && npm install",
//       "heroku-postbuild": "echo \"HELLOOOOOOO postbuild\" && cd ../frontend && npm run install-client && npm run build"