const { createProduct, upload } = require('../controllers/productController');
const productRouter = require('express').Router();

productRouter.post('/addProduct', upload, createProduct);

module.exports = productRouter;
