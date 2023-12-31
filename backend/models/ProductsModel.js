module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Products = sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    countInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    numReviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  // PRODUCTS TABLE ASSOCIATION WITH REVIEWS TABLE, hence creating the ProductId on the Reviews table in respect to the PRODUCT
  Products.associate = (models) => {
    Products.hasMany(models.Reviews, {
      onDelete: 'cascade',
    });
    Products.hasMany(models.Orders, {
      onDelete: 'cascade',
    });
  };

  return Products;
};
