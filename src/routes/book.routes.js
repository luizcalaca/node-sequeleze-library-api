const express = require('express');
const router = express.Router()
const bookController = require('../controllers/book.controller')


router.post('/', bookController.createBook)
router.get('/', bookController.listAllBooks)
router.get('/users', bookController.listAllBooks)

module.exports = router