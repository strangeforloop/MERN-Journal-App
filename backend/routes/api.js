const express = require('express');
const router = express.Router();
const BlogPost = require('../database/models/blogPost');

// mount the route handlers to router

router.use(express.json());

// test
router.get('/ping', function(req, res) {
  res.send('ping');
  // axois to get data
});

// get the list of blog posts
router.get('/allposts', async function(req, res, next) {
  // console.log('allposts allposts ');
  const blogPosts = await BlogPost.find().sort({'date': 'asc'});
  // console.log(blogPosts);
  res.send(blogPosts);
});

// add a new blog post to the ~posts endpoint~ db
router.post('/post', function (req, res) {
  // -- the following lines can be replaced by create
  // var blogPost = new BlogPost(req.body);
  // // save the info coming back into the db i the BlogPost collection
  // blogPost.save();

  console.log(req.body);
  // console.log(req);
  BlogPost.create(req.body).then(function(blogPost) {
    res.send(blogPost);
  }).catch(function(e) {
    console.error('Error:', e.message);
    res.status(418).json({ error: "Uh oh. Error."});
  });
});

router.get('/', function (req, res) {
  // console.log('get home page');
  res.send({ requestType: 'GET' });
});

// need to export these routes so you can use them in index.js
module.exports = router;
