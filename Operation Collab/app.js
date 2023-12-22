const express = require('express');
const createError = require('http-errors');
const path = require('path');

const app = express();

// Extracting arrays from the customers object
const customers = require('./routes/customer');
const { customerDetailsArray, paymentsDetailArray, productDetailsArray } = customers;

// Routes initialization
const indexRouter = require('./routes/index');
const sqlRouter = require('./routes/sql');

// Setting views to use the 'views' directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Using public folder for stylesheet and images
app.use(express.static(path.join(__dirname, 'public')));


// / and /sql route handlers
app.use('/', indexRouter);
app.use('/sql', sqlRouter);

// // Customer-related routes
// app.get('/customers', (req, res) => {
//   res.send(customerDetailsArray);
// });

// // Payments-related routes
// app.get('/payments', (req, res) => {
//   res.send(paymentsDetailArray);
// });

// // Products-related routes
// app.get('/products', (req, res) => {
//   res.send(productDetailsArray);
// });

// Error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(express.json());

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
