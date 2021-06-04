const mongoose = require('mongoose');

const Product = mongoose.model(
  'Product',
  new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
  }),
);

module.exports = Product;
