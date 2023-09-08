module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Orders = sequelize.define('Orders', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue: 0.0,
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

  Orders.associate = (models) => {
    // Define the association with the Product model
    Orders.belongsTo(models.Products, {
      foreignKey: 'ProductId', // Adjust the foreign key field name as needed
      as: 'Product',
    });
  };

  return Orders;
};
