const blogRouter = require("express").Router();
const Blog = require("../models/Blog");
const logger = require("../utils/logger");

blogRouter.get("/", (request, response) => {
  Blog.find({}).then(blogs => {
    logger.info("getting blog posts");
    response.json(blogs);
  });
});

blogRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then(result => response.json(result));
});

module.exports = blogRouter;
