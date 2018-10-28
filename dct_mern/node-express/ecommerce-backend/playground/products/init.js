const { Product } = require('./product.js')

var p1 = new Product({name: 'marker', price: 15})
console.log(p1.details());