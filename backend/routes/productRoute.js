const {
  createProduct,
  upload,
  updateProduct,
} = require('../controllers/productController');
const productRouter = require('express').Router();

productRouter.post('/addProduct', upload, createProduct);
productRouter.put('/updateProduct/:id', upload, updateProduct);

module.exports = productRouter;
