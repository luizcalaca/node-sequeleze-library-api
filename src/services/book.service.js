const {Book, User} = require('../database/models/index')
const Joi = require('joi');

const validateBody = (data) => {
    const schema = Joi.object({
    name: Joi.string().required(),
    userId: Joi.number().required()
  })

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
}

const createBook = async ({name, userId}) => {
    validateBody({name, userId})
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