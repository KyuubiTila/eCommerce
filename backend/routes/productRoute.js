const {
  createProduct,
  upload,
  updateProduct,
  viewProduct,
} = require('../controllers/productController');
const productRouter = require('express').Router();

productRouter.post('/addProduct', upload, createProduct);
productRouter.put('/updateProduct/:id', upload, updateProduct);
productRouter.get('/:id', viewProduct);

module.exports = productRouter;
