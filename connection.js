const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URI
mongoose.connect(MONGO_URL, ()=> {
  console.log('connected to mongodb')
})
