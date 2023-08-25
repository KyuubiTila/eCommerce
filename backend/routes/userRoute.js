const { createUsers, login } = require('../controllers/userController');
const userRouter = require('express').Router();

userRouter.post('/register', createUsers);
userRouter.get('/register', login);

module.exports = userRouter;
