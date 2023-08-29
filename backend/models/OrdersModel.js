module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Orders = sequelize.define('Orders', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
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
  });
  return Orders;
};
