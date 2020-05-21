const app = require('./server');
const blogRouter = require('./controller/blogRouter');
const middleware = require('./utils/middleware');

app.use('/api/blogs', blogRouter);
app.use(middleware.unknownEndPoint);

module.exports = app;
