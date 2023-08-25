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

// UPDATE USER
const updateUser = async (req, res) => {
  const { name, email, newPassword, oldPassword } = req.body;

  try {
    const user = await Users.findOne({ where: { name: name } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(oldPassword, user.password);

    if (!checkPassword) {
      return res.status(400).json({ error: 'Incorrect old password' });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    const updatedUser = await user.update({
      name: name,
      email: email,
      password: passwordHash,
    });

    res
      .status(200)
      .json({ message: 'User updated successfully', data: updatedUser });
  } catch (error) {
    console.error('Error while updating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the user' });
  }
};

// VIEW INDIVIDUAL PROFILE
const viewIndividualProfile = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error('Error while fetching individual profile:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the user profile' });
  }
};

module.exports = {
  createUsers,
  login,
  updateUser,
  viewIndividualProfile,
};
