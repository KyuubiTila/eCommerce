module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Checkout = sequelize.define('Checkout', {
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
  return Checkout;
};
