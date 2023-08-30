const {
  addOrder,
  fetchAllOrders,
  deleteOrder,
} = require('../controllers/ordersController');
const { validateToken } = require('../middleware/AuthMiddleware');

const orderRouter = require('express').Router();

orderRouter.get('/', fetchAllOrders);
orderRouter.post('/addOrder', addOrder);
orderRouter.delete('/:id', validateToken, deleteOrder);

module.exports = orderRouter;
