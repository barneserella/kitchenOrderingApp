const express = require('express');
const port = 3000;
const mongoose = require('mongoose');
const ingredientsRouter = require('./routes/ingredients');

const app = express();

// connect to MongoDB
mongoose.connect();


// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/", ingredientsRouter);


// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})