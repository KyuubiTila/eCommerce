const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcryptjs');

const { sign } = require('jsonwebtoken');

// CREATE USERS
const createUsers = async (req, res, next) => {
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
    return next(error);
  }
};

//LOGIN USER
const login = async (req, res, next) => {
  const { name, password } = req.body;

  try {
    const findUser = await Users.findOne({ where: { name: name } });

    if (!findUser) {
      throw new Error('Database error: User not found');
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
        throw new Error('Incorrect password');
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    return next(error);
  }
};

// UPDATE USER
const updateUser = async (req, res, next) => {
  const { name, email, newPassword, oldPassword } = req.body;

  try {
    const user = await Users.findOne({ where: { name: req.params.name } });

    if (!user) {
      throw new Error('Database error: User not found');
    }

    const checkPassword = await bcrypt.compare(oldPassword, user.password);

    if (!checkPassword) {
      throw new Error('Database error: Incorrect old password');
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    const updatedUser = await Users.update(
      {
        name: name,
        email: email,
        password: passwordHash,
      },
      { where: { name: req.params.name } }
    );

    res
      .status(200)
      .json({ message: 'User updated successfully', data: updatedUser });
  } catch (error) {
    console.error('Error while updating user:', error);
    return next(error);
  }
};

// VIEW INDIVIDUAL PROFILE
const viewIndividualProfile = async (req, res, next) => {
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });

    if (!user) {
      throw new Error('Database error: User not found');
    }

    res.json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error('Error while fetching individual profile:', error);
    return next(error);
  }
};

module.exports = {
  createUsers,
  login,
  updateUser,
  viewIndividualProfile,
};
