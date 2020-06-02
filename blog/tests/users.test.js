const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const supertest = require('supertest');
const User = require('../models/User');
const app = require('../App');

const api = supertest(app);

describe('when there is initially one user in the db', () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash('sekret', 10);
    const user = new User({
      username: 'root',
      name: 'Paulo',
      password: 'password',
      passwordHash,
    });
    await user.save();
  }, 30000);

  test('check that a user exists in the DB', async () => {
    const usersInDb = await api.get('/api/users');
    expect(usersInDb.body).toHaveLength(1);
  });

  test('check that a new user can be created in DB', async () => {
    const user = {
      username: 'sholzy',
      name: 'shola',
      password: 'password',
    };
    await api.post('/api/users').send(user).expect(200);
    const usersInDb = await api.get('/api/users');
    expect(usersInDb.body).toHaveLength(2);
  });

  test('signing up with a username that already exists fails with a status code and error message', async () => {
    const user = {
      username: 'sholzy',
      name: 'shola',
      password: 'password',
    };

    const result = await api.post('api/blogs').send(user).expect(400);
    console.log(result);
    // expect(result.body.error).toContain('That username is not available');
    // const usersInDb = await api.get('/api/users');
    // expect(usersInDb.body).toHaveLength(2);
  });
}, 30000);

afterAll(() => {
  mongoose.connection.close();
});
