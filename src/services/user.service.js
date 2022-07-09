const {User, Book} = require('../database/models/index')
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const sequelize = new Sequelize(config.development);

const getAllUsers = async () => {
    const result = await User.findAll()
    return result
}

const createUser = async () => {
    const result = await User.create()
    return result
}

const createUserComBook = async ({email, password_hash, name, phone, namebook }) => {
    console.log(email, password_hash, name, phone, namebook )
    const t = await sequelize.transaction();

    try {

        const user = await User.create(
        { email, name, phone, password_hash },
        { transaction: t },
        );

        await Book.create(
        { userId: user.id, namebook  },
        { transaction: t },
        );

        await t.commit();

        return true
    } catch (e) {
        await t.rollback();
        console.log(e.message);
        return e
    }
}

module.exports = {getAllUsers, createUserComBook}