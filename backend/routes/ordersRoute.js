const {
  addOrder,
  fetchAllOrders,
  deleteOrder,
} = require('../controllers/ordersController');

const orderRouter = require('express').Router();

orderRouter.get('/', fetchAllOrders);
orderRouter.post('/addOrder', addOrder);
orderRouter.delete('/:id', deleteOrder);

module.exports = orderRouter;
