module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Reviews = sequelize.define('Reviews', {
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Reviews;
};
