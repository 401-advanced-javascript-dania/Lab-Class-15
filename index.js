const server = require('./server.js');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
dotenv.config();
const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
};
mongoose.connect(MONGODB_URI,mongooseOptions);
server.start(process.env.PORT);