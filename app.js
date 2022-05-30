const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require ('./routes/sauces')

dotenv.config();

const path = require('path');

// Connect to DB 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('connected To DB')
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(express.json());

// Route middlewares 
app.use('/api/user', authRoute)
app.use('/api/sauces', postRoute)

module.exports = app;