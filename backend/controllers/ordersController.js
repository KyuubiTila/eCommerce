const db = require('../models');
const Orders = db.Orders;
const Products = db.Products;

const addOrder = async (req, res) => {
  try {
    const { ProductId } = req.body;

    // Find an existing order by ProductId
    let existingOrder = await Orders.findOne({
      where: { ProductId: ProductId },
    });

    console.log(existingOrder);

    if (existingOrder) {
      // If an existing order is found, check if it's paid
      if (existingOrder.isPaid) {
        res
          .status(400)
          .send(
            'This product is already paid for and processed for shipping.Do you want to delete previous order'
          );
        return;
      }
      // Increment quantity and update the order if it's not paid
      existingOrder.quantity++;
      existingOrder.totalPrice = existingOrder.quantity * existingOrder.price;
      await existingOrder.save();
    } else {
      // Create a new order if it doesn't exist
      const newOrder = await Orders.create(req.body);
      existingOrder = newOrder; // Set existingOrder to the newly created order
    }

    // Now, let's perform the join with another table
    const orderWithProduct = await Products.findOne({
      where: { id: ProductId },
      include: [{ model: Orders, as: 'Orders' }],
    });

    res.status(200).send(orderWithProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding or updating order.');
  }
};

const fetchAllOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll({
      where: { isPaid: true },
      include: [{ model: Products, as: 'Product' }], // Assuming 'Product' is the alias for the association
    });

    res.status(200).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching orders.');
  }
};

const deleteOrder = async (req, res) => {
  const { ProductId } = req.params;

  try {
    await Orders.destroy({ where: { ProductId: ProductId } });
    res.status(200).send('Deleted');
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).send('Internal Server Error');
  }
};

const updateOrder = async (req, res) => {
  const { ids } = req.body;
  const data = {
    isPaid: true,
  };

  try {
    await Orders.update(data, { where: { id: ids } });
    res.status(200).send('Updated');
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addOrder,
  fetchAllOrders,
  deleteOrder,
  updateOrder,
};
