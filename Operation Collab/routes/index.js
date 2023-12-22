// Require express
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}/`);
});

module.exports = router