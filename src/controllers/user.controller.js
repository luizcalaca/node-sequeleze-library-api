const userService = require('../services/user.service')

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers()
    return res.status(200).json(result)
}

const createUserWithBook = async (req, res) => {
    const result = await userService.createUserComBook(req.body)
    return res.status(200).json(result)
}

const createUser = async (req, res) => {
    const result = await userService.createUser(req.body)
    return res.status(200).json(result)
}

module.exports = {getAllUsers, createUserWithBook, createUser}
