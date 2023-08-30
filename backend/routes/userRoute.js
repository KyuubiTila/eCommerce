const {
  createUsers,
  login,
  updateUser,
  viewIndividualProfile,
  actualToken,
} = require('../controllers/userController');
const { validateToken } = require('../middleware/AuthMiddleware');
const userRouter = require('express').Router();

userRouter.post('/register', createUsers);
userRouter.post('/login', login);
userRouter.put('/updateUser/:name', updateUser);
userRouter.get('/:id', viewIndividualProfile);
userRouter.get('/verify/authToken', validateToken, actualToken);

module.exports = userRouter;
