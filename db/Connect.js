const mongoose = require("mongoose");

//function to connect to db
const connectToDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectToDB;
