const { createUsers } = require('../controllers/userController');
const userRouter = require('express').Router();

userRouter.post('/register', createUsers);

module.exports = userRouter;
