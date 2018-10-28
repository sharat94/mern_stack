const express = require('express');
const router = express.Router();
const { booksController } = require('../app/controllers/books_controller');
const { moviesController } = require('../app/controllers/movies_controller');
const { categoriesController } = require('../app/controllers/categories_controller');
const { productsController } = require
('../app/controllers/products_controller');

router.use('/books', booksController);
router.use('/movies', moviesController);
router.use('/categories', categoriesController);
router.use('/products', productsController);

module.exports = {
  routes: router
}