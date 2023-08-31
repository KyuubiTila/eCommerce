const db = require('../models');
const ShippingAddress = db.ShippingAddress;

const addAddress = async (req, res) => {
  const id = req.user.id;
  const { address, city, postalCode, country } = req.body;

  details = {
    address: address,
    city: city,
    postalCode: postalCode,
    country: country,
    UserId: id,
  };

  const createdAddress = await ShippingAddress.create(details, {
    where: { UserId: id },
  });
  res.status(200).send(createdAddress);
};

const getAddress = async (req, res) => {
  const id = req.user.id;

  const address = await ShippingAddress.findOne({
    where: { UserId: id },
  });
  res.status(200).send(address);
};

const updateAddress = async (req, res) => {
  const userId = req.user.id;
  const { address, city, postalCode, country } = req.body;

  details = {
    address: address,
    city: city,
    postalCode: postalCode,
    country: country,
  };

  const updatedAddress = await ShippingAddress.update(details, {
    where: { UserId: userId },
  });
  res.status(200).send(updatedAddress);
};

module.exports = {
  addAddress,
  getAddress,
  updateAddress,
};
