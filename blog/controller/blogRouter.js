const blogRouter = require('express').Router();
const Blog = require('../models/Blog');
const logger = require('../utils/logger');

blogRouter.get('/', async (request, response) => {
  try {
    const blogs = await Blog.find({});
    if (process.env.NODE_ENV !== 'test') {
      logger.info('getting blog posts');
    }

    response.json(blogs);
  } catch (error) {
    console.log(error);
  }
});

blogRouter.get('/:id', async (request, response) => {
  const id = request.params.id.toString();

  try {
    const findBlogWithId = await Blog.findById(id);
    response.json(findBlogWithId);
  } catch (error) {
    response.json({ error: 'There is no blog with that ID.' });
  }
});

blogRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body);
  try {
    const savedBlog = await blog.save();
    response.json(savedBlog.toJSON());
  } catch (error) {
    response
      .status(400)
      .json({ error: 'There was a problem saving that blog.' });
  }
});

blogRouter.delete('/:id', async (request, response) => {
  const id = request.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    response.status(204).json({ message: 'blog deleted!' });
  } catch (error) {
    response.json({ error: 'The blog could not be deleted.' });
  }
});

blogRouter.put('/:id', async (request, response) => {
  const id = request.params.id;

  const { likes, title, author, url } = request.body;
  const updatedBlog = { likes, title, author, url };

  try {
    const updatedBlogInDb = await Blog.findByIdAndUpdate(id, updatedBlog, {
      useFindAndModify: false,
    });
    console.log(updatedBlogInDb);
    response.json(updatedBlogInDb);
  } catch (error) {
    response.json({ error: 'There was a problem updating that blog' });
  }
});

module.exports = blogRouter;
