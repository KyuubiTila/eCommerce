module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Orders = sequelize.define('Orders', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    itemsPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0.0,
    },
    taxPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0.0,
    },
    shippingPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0.0,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0.0,
    },
    isDelivered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    deliveredAt: {
      type: DataTypes.DATE,
    },
  });
  return Orders;
};
