const booksService = require('../services/book.service');

//http://localhost:6000/books/users?include=true
const listAllBooks = async (req, res) => {
    if (req.query.include === 'true') {
        const books = await booksService.listAllBookWithUsers()
        return res.status(200).json(books);
    }

    res.status(200).json(await booksService.listAllBooks());
}

const createBook = async (req, res) => {
    const book = await booksService.create(req.body);
    res.status(201).json(book);
}

module.exports = {listAllBooks, createBook}