const db = require('../models');
const Orders = db.Orders;

const addOrder = async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new order or find an existing one by ID
    let existingOrder = await Orders.findOne({ where: { name: name } });

    if (existingOrder) {
      // If an existing order is found, increment its quantity by one
      existingOrder.quantity++;
      await existingOrder.save();
    } else {
      // If no existing order is found, create a new one
      const newOrder = await Orders.create(req.body);
      existingOrder = newOrder; // Set existingOrder to the newly created order
    }

    res.status(200).send(existingOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding or updating order.');
  }
};

const fetchAllOrders = async (req, res) => {
  const orders = await Orders.findAll({});
  res.status(200).send(orders);
};

const deleteOrder = async (req, res) => {
  let id = req.params.id;

  await Orders.destroy({ where: { id: id } });
  res.status(200).send('deleted');
};

module.exports = {
  addOrder,
  fetchAllOrders,
  deleteOrder,
};
