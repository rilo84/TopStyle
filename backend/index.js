const express = require('express');
const app = express();
const mongoose = require('mongoose');
const verifyToken = require('./services/security/VerifyToken');
require("dotenv").config();
mongoose.set('useUnifiedTopology', true);

//Connect to MongoDB
mongoose.connect(process.env.CONN, { useNewUrlParser: true });

//Routes
const userRoute = require('./routes/User');
const productRoute = require('./routes/Products');

//Middleware
app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/products', productRoute);

//Start server
app.listen(3001, () => console.log("Server running @port 3001"));