var express = require('express');
var router = express.Router();
const { validateCategory } = require('../middleware/category.middleware');
// Import the functions from ProductController
const { index, show, store, update, patch, remove } = require('./../controllers/categoryController')

/* GET home page. */
router.get('/', index);

/* GET home page. */
router.get('/:id', show);

/* PUT a product. */
router.put('/:id', update);

/* PATCH a product. */
router.patch('/:id', patch);

/* POST Product. */
router.post('/', validateCategory, store);
router.delete('/:id', remove);

module.exports = router;