const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2
  },
  lastName: {
    type: String,
    required: true,
    min: 2
  },
  adress: {
    type: String,
    required: true,
    min: 2
  },
  email: {
    type: String,
    required: true,
    min: 2
  },
  username: {
    type: String,
    required: true,
    min: 4
  },
  password: {
    type: String,
    required: true,
    min: 4
  },
  date:{
      type:Date,
      default:Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
