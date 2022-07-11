const {Book, User} = require('../database/models/index')

const createBook = async ({name, userId}) => {
    const book = await Book.create({ name, userId });
    return book;
}

const listAllBooks = async () => {
    const books = await Book.findAll()
    return books;
}

const listAllBookWithUsers = async () => {
        // TODO: incluir os dados de usuários
        //eager loading
    const books = await Book.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['passwordHash'] } }],
    });
    
    return books;
}

module.exports = {createBook, listAllBookWithUsers, listAllBooks}