const mongoose = require('mongoose');
require('dotenv').config()

const connectToDatabase = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
  });
};

module.exports = connectToDatabase;