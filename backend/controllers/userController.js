const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcryptjs');

const { sign } = require('jsonwebtoken');

// CREATE USERS
const createUsers = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const userData = await Users.create({
      name: name,
      email: email,
      password: passwordHash,
      isAdmin: false,
    });
    res.status(201).send(userData);
  } catch (error) {
    console.error('Error while creating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the user' });
  }
};

//LOGIN USER
const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const findUser = await Users.findOne({ where: { name: name } });

    if (!findUser) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      const checkPassword = await bcrypt.compare(password, findUser.password);
      if (checkPassword) {
        const accessToken = sign(
          { name: findUser.name, id: findUser.id },
          'importantsecrete'
        );
        return res.json({
          token: accessToken,
          name: findUser.name,
          id: findUser.id,
        });
      } else {
        return res.status(401).json({ error: 'Incorrect password' });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

module.exports = {
  createUsers,
  login,
};
