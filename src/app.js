const express = require('express');
const cors = require('cors');
const usersRouter = require('../src/routes/user.routes')
const booksRouter = require('../src/routes/book.routes')
const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/books', booksRouter);

module.exports = app;