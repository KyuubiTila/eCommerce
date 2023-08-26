// create an instance of the express framework
const express = require('express');
// crate an instance of app which enables us to make api request, initilize our server etc
const app = express();
const cors = require('cors');
const db = require('./models');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const {
  globalErrorHandler,
  notFoundHandler,
} = require('./middleware/globalErrorHandler');
// MIDDLEWARES
// ENABLE US PARSE REQUEST FROM THE CLIENT END EXAMPLE THUNDER CLIENT OR POSTMAN AND IN THE CASE OF THE WEB CLIENT SIDE ALSO
app.use(express.json());

// BODY PARSER
var corOptions = {
  // allows us to make request from ALL kind of server aside from its own server side
  origin: '*',
};
app.use(cors(corOptions));

// -------------ROUTERS---------------

// ---------users route---------
app.use('/api/auth', userRouter);

// ---------product route---------
app.use('/api/product', productRouter);

app.use(notFoundHandler);

app.use(globalErrorHandler);

// GO INTO THE DB AND SYNCHRONIZE IF THE MODELS ALREADY EXIST, IF NOT MAKE THEM EXIST
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log(`server is running on port 3001`);
  });
});
