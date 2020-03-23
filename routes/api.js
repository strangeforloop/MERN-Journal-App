const express = require('express');
const router = express.Router();
const BlogPost = require('../database/models/blogPost');

router.use(express.json());

router.get('/ping', function(req, res) {
  res.send('ping');
});

router.get('/allposts', async function(req, res, next) {
  console.log('allposts allposts ');
  const blogPosts = await BlogPost.find().sort({'date': 'desc'});
  // console.log(blogPosts);
  res.send(blogPosts);
});

// add a new blog post to the ~posts endpoint~ db
router.post('/entry', function (req, res) {
  // console.log(req.body);
  // console.log(req);
  BlogPost.create(req.body).then(function(blogPost) {
    res.send(blogPost);
  }).catch(function(e) {
    // console.error('Error:', e.message);
    res.status(418).json({ error: "Uh oh. Error."});
  });
});

router.get('/entry', function (req, res) {
  // Get count of all blog posts
  BlogPost.count().exec(async function (err, count) {
    // Get a random number out of this count
    var random = Math.floor(Math.random() * count);

    // Query db using random number
    const journalEntry = await BlogPost.findOne().skip(random).exec(
      function(err, result) {
        console.log('result: ', result);
        res.send(result);
    });
  });

});

// router.get('/', function (req, res) {
//   res.send({ requestType: 'GET' });
// });  

module.exports = router;
