const { upload } = require('../config/multerConfig');
const db = require('../models');
const Products = db.Products;

// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const productData = {
      image: req.file.path,
      name: req.body.name,
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
    };

    const product = await Products.create(productData);
    res.status(200).send(product);
    console.log(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the product' });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const product = await Products.findOne({ where: { id: req.params.id } });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const updateProduct = {
      image: req.file.path,
      name: req.body.name,
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
    };

    await Products.update(updateProduct, { where: { id: req.params.id } });
    res.status(200).send(updateProduct);
    console.log(updateProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the product' });
  }
};

module.exports = {
  upload,
  createProduct,
  updateProduct,
};
