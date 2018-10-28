//Object Prototype Function


const mongoose = require('mongoose');
const { Product } = require('../models/product');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 64
  }
});

categorySchema.statics.findAllProducts = function(id){
  let categoryId = id;
  return Product.find({category: categoryId})
}

const Category = mongoose.model('Category', categorySchema);

module.exports = {
  Category
};