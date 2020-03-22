const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create post Schema and model
const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A title is required.']
  },
  body: {
    type: String,
    required: [true, 'Body text is required.']
  },
  date: {
    type: Date
  }
});

// create a model that will represent the collection
// in the DB
const BlogPost = mongoose.model('blogPost', PostSchema);

module.exports = BlogPost;