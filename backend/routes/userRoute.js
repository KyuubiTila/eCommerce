const {
  createUsers,
  login,
  updateUser,
} = require('../controllers/userController');
const userRouter = require('express').Router();

userRouter.post('/register', createUsers);
userRouter.get('/login', login);
userRouter.put('/updateUser', updateUser);

module.exports = userRouter;
