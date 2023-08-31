const {
  addAddress,
  getAddress,
  updateAddress,
} = require('../controllers/shippingAddressController');
const { validateToken } = require('../middleware/AuthMiddleware');
const shippingAddressRouter = require('express').Router();

shippingAddressRouter.post('/', validateToken, addAddress);
shippingAddressRouter.get('/', validateToken, getAddress);
shippingAddressRouter.put('/updateAddress', validateToken, updateAddress);

module.exports = shippingAddressRouter;
