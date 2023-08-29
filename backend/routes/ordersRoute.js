const { addOrder, fetchAllOrders } = require('../controllers/ordersController');

const orderRouter = require('express').Router();

orderRouter.get('/', fetchAllOrders);
orderRouter.post('/addOrder', addOrder);

module.exports = orderRouter;
