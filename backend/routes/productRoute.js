const {
  createProduct,
  upload,
  updateProduct,
  viewProduct,
  deleteProduct,
} = require('../controllers/productController');
const productRouter = require('express').Router();

productRouter.post('/addProduct', upload, createProduct);
productRouter.put('/updateProduct/:id', upload, updateProduct);
productRouter.get('/:id', viewProduct);
productRouter.delete('/:id', deleteProduct);

module.exports = productRouter;
