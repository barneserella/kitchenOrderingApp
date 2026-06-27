const express = require('express');
const path = require('path');
const ingredientsRouter = require('./routes/ingredients');
const menuRouter = require('./routes/menu')
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
app.use('/menu', menuRouter);


// Start the server
const PORT = process.env.PORT || 3100
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})