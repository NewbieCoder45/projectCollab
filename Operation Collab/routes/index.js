// Require express
const express = require('express');
const router = express.Router()

// Define a route
router.get('/', function(req, res,next) {
  //res.send('Hello from Express!');
  res.render(
              "index",
              {
              title: "Bajrang Dal", 
              }
            )
});


module.exports = router