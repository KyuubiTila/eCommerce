const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcryptjs');

// CREATE USERS
const createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const userData = await Users.create({
    name: name,
    email: email,
    password: passwordHash,
    isAdmin: false,
  });
  res.status(200).send(userData);
};

module.exports = {
  createUsers,
};
