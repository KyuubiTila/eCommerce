module.exports = (sequelize, DataTypes) => {
  // "Posts" as the name it should place the table as
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Products, {
      onDelete: 'cascade',
    });
    Users.hasMany(models.Reviews, {
      onDelete: 'cascade',
    });
    Users.hasMany(models.Orders, {
      onDelete: 'cascade',
    });
    Users.hasOne(models.ShippingAddress, {
      onDelete: 'cascade',
    });
    Users.hasOne(models.Checkout, {
      onDelete: 'cascade',
    });
  };

  return Users;
};
