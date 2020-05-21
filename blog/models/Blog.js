const mongoose = require('mongoose');
const config = require('../utils/config');

mongoose.connect(config.DB_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  url: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
