const express = require('express');
const cors = require('cors');
const usersRouter = require('../src/routes/user.routes')
const booksRouter = require('../src/routes/book.routes')
const authRouter = require('../src/routes/auth.routes')
const authController = require('../src/controllers/auth.controller')
const errorHandler = require('../src/middleware/error.middleware')
const app = express();

app.use(express.json());
app.use(cors());

app.use('/signin', authRouter);
app.use('/users', usersRouter);
app.use(authController.validateToken);
app.use('/books', booksRouter);
app.use(errorHandler)

module.exports = app;