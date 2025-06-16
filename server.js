const express = require('express');
const path = require('path');
const ingredientsRouter = require('./routes/ingredients');
require('dotenv').config({ path: './config/.env' });
const connectDB = require("./config/database");

const app = express();

// connect to MongoDB
connectDB();


// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join( __dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", ingredientsRouter);


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})