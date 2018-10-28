const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');

router.get('/', (req, res) => {
  Product.find().populate('category').then((products) => {
    res.send({
      products
    });
  }).catch((err) => {
    res.send(err);
  });
});

router.post('/', (req, res) => {
  let body = req.body;
  let product = new Product(body);
  product.save().then(
    res.send({
      product,
    notice: 'product saved successfully.'
  })).catch((err) => {
    res.send(err);
  });
});

router.delete('/', (req, res) => {
  let id = req.params.id;
  Product.findOneAndDelete(id).then((product) => {
    res.send({
      product,
      notice: ' product is deleted.'
    });
  }).catch((err) => {
    res.send(err);
  });
});

router.put('/', (req, res) => {
  let id = req.params.id;
  let body = req.body;
  Product.findOneAndUpdate(id, body, {new: true}).then((product) => {
    res.send({
      product,
      notice: ' product is deleted.'
    });
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/:id/short', (req, res) => {
  let id = req.params.id;
  Product.findById(id).then((product) => {
    res.send(product.shortInfo());
  });
});

router.get('/short/all', (req, res) => {
  Product.find().then((products) => {
    res.send(products.map(product => product.shortInfo()))
  });
});
router.get('/:id', (req, res) => {
  let id = req.params.id;
  Product.findById(id).populate('category').then((product) => {
    res.send({
      product
    });
  }).catch((err) => {
    res.send(err);
  });
});

module.exports = {
  productsController: router
}