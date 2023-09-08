const {
  addOrder,
  fetchAllOrders,
  deleteOrder,
  updateOrder,
} = require('../controllers/ordersController');
const { validateToken } = require('../middleware/AuthMiddleware');

const orderRouter = require('express').Router();

orderRouter.get('/', fetchAllOrders);
orderRouter.post('/', addOrder);
orderRouter.delete('/:ProductId', validateToken, deleteOrder);
orderRouter.put('/', updateOrder);

module.exports = orderRouter;
