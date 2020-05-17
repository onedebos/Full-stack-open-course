const mongoose = require("mongoose");
const config = require("../utils/config");

mongoose.connect(config.DB_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
