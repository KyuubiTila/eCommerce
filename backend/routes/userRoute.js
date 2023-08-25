const {
  createUsers,
  login,
  updateUser,
  viewIndividualProfile,
} = require('../controllers/userController');
const userRouter = require('express').Router();

userRouter.post('/register', createUsers);
userRouter.get('/login', login);
userRouter.put('/updateUser/:name', updateUser);
userRouter.get('/:id', viewIndividualProfile);

module.exports = userRouter;
