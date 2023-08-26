const { upload } = require('../config/multerConfig');
const db = require('../models');
const Products = db.Products;

// CREATE PRODUCT
const createProduct = async (req, res, next) => {
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
    return next(error);
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res, next) => {
  try {
    const product = await Products.findOne({ where: { id: req.params.id } });

    if (!product) {
      throw new Error('error: Product not found');
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
    return next(error);
  }
};

// VIEW PRODUCT DETAILS
const viewProduct = async (req, res, next) => {
  try {
    const product = await Products.findOne({ where: { id: req.params.id } });

    if (!product) {
      throw new Error('error: Product not found');
    }

    res.json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    console.error('Error while viewing product:', error);
    return next(error);
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Products.destroy({ where: { id: req.params.id } });

    res.json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  upload,
  createProduct,
  updateProduct,
  viewProduct,
  deleteProduct,
};
