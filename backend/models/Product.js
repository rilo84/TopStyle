const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2
  },
  category: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  description: {
    type: String,
    required: true,
    max: 300
  },
  size:{
    type:String,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min:0
  },
  imagelink: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('Product', productSchema);
