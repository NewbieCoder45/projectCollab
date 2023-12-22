const express = require('express')
const createError = require('http-errors')
const customers = require('./routes/customer')

// Extracting arrays from the customers object
const { customerDetailsArray, paymentsDetailArray, productDetailsArray } = customers;

const app = express()

// Routes initialization
const indexRouter = require('./routes/index')

// Now you can use the imported arrays in your application
console.log(customerDetailsArray)
console.log(paymentsDetailArray)
console.log(productDetailsArray)

// Set up your routes and other configurations here...

// Example route
app.use('/', indexRouter)

// Error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
