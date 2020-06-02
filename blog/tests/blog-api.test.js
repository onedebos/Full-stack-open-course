const mongoose = require('mongoose');
const supertest = require('supertest');
const Blog = require('../models/Blog');
const app = require('../App');

const api = supertest(app);

const blogs = [
  {
    id: '5ec8ee1d95baa0535fe4d3d7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
  },
  {
    id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  },
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(blogs[0]);
  await blogObject.save();

  blogObject = new Blog(blogs[1]);
  await blogObject.save();
});

describe('when there are blogs in the db', () => {
  test('blogs are returned as json', async () => {
    const response = await api.get('/api/blogs');
    expect(response.body).toHaveLength(blogs.length);
  });

  test('blogs db contains React patterns blog', async () => {
    const response = await api.get('/api/blogs');
    expect(response.body[0].author).toContain('Michael Chan');
  });
  test('can get specific blog by ID', async () => {
    const allBlogsInDb = await api.get('/api/blogs');
    const firstBlogInDb = allBlogsInDb.body[0];
    const response = await api.get(`/api/blogs/${firstBlogInDb.id}`);
    expect(response.body.title).toContain('React patterns');
  });

  test('can delete specific blog by ID', async () => {
    let allBlogsInDb = await api.get('/api/blogs');
    const IdOfBlogToDelete = allBlogsInDb.body[0].id;
    await api.delete(`/api/blogs/${IdOfBlogToDelete}`).expect(204);
    allBlogsInDb = await api.get('/api/blogs');
    expect(allBlogsInDb.body).toHaveLength(blogs.length - 1);
  });
});

describe('when adding blogs to db', () => {
  test('a valid blog can be added', async () => {
    const newBlog = {
      title: 'New blog',
      author: 'New author',
      url: 'http://newurl.com',
      likes: 10,
    };

    await api.post('/api/blogs').send(newBlog).expect(200);

    const response = await api.get('/api/blogs');
    const blogWithLikes = response.body[response.body.length - 1];

    expect(response.body).toHaveLength(blogs.length + 1);
    expect(blogWithLikes.author).toContain('New author');
  });

  test('adding a blog without likes defaults to 0', async () => {
    const blogWithoutLikesObj = {
      title: 'New blogWithoutLikes',
      author: 'New authorWithoutLikes',
      url: 'http://newurl.com',
    };

    await api.post('/api/blogs').send(blogWithoutLikesObj).expect(200);
    const response = await api.get('/api/blogs');
    const blogWithoutLikes = response.body[response.body.length - 1];
    console.log(blogWithoutLikes);
    expect(blogWithoutLikes.likes).toEqual(0);
  });
});

describe('when requests are invalid', () => {
  test('a blog without title and url responds with 400', async () => {
    const blog = {
      title: '',
      author: 'New authorWithoutLikes',
      url: '',
    };

    await api.post('/api/blogs').send(blog).expect(400);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
