const express = require('express');
const ingredientsRouter = require('./routes/ingredients');
require('dotenv').config({ path: './config/.env' });
const connectDB = require("./config/database");

const app = express();

// connect to MongoDB
connectDB();


// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", ingredientsRouter);


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})