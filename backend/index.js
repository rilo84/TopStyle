const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
mongoose.set('useUnifiedTopology', true);


//Connect to MongoDB
mongoose.connect(process.env.CONN, { useNewUrlParser: true });

//Routes
const userRoute = require('./routes/User');
const productRoute = require('./routes/Products');
const orderRoute = require('./routes/Orders');

//Middleware
app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

//Start server
app.listen(3001, () => console.log("Server running on port 3001"));