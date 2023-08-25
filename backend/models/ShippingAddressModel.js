module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const ShippingAddress = sequelize.define('ShippingAddress', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return ShippingAddress;
};
