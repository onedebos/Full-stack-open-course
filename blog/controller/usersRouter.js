const usersRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs');

  response.json(users.map((user) => user));
});

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body;

  try {
    if (password === undefined || password.length < 3) {
      return response.json({
        error:
          'You have not provided a passowrd or your password is less than 3 characters',
      });
    }
    const saltRounds = 10;
    const passwordHashed = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, name, passwordHash: passwordHashed });
    const savedUser = await user.save();
    response.json(savedUser);
  } catch (err) {
    response.json({ error: `User could not be saved,  ${err}` });
  }
});

usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  await User.findByIdAndDelete(id);
  response.status(204).end();
});

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const user = await User.findById(id);
  response.json(user);
});

module.exports = usersRouter;
