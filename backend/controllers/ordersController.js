const db = require('../models');
const Orders = db.Orders;

const addOrder = async (req, res) => {
  const addedProduct = await Orders.create(req.body);
  res.status(200).send(addedProduct);
};

const fetchAllOrders = async (req, res) => {
  const orders = await Orders.findAll({});
  res.status(200).send(orders);
};

module.exports = {
  addOrder,
  fetchAllOrders,
};
