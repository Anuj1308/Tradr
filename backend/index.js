require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const url = process.env.MONGO_URL;

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  mongoose.connect(url)
  console.log('Connected to MongoDB');
});