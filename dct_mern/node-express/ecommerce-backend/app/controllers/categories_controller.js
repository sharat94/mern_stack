const express = require('express');
const router = express.Router();
const { Category } = require('../models/category');
router.get('/', (req, res) => { 
  Category.find().then((categories) => {
    res.send(categories);
  }).catch((err) => {
    res.send(err);
  })
})

router.get('/:id/products', (req, res) => {
  let categoryId = req.params.id;
  Category.findAllProducts(categoryId).then((products) => {
    res.send(products);
  }).catch((err) => {
    res.send(err);
  })
})
// router.get('/:id/products', (req, res) => {
//   let categoryId = req.params.id;
//   Product.find({category: categoryId}).then((products) => {
//     res.send(products);
//   }).catch((err) => {
//     res.send(err);
//   });
// });

router.post('/', (req, res) => {
  let body = req.body;
  let category = new Category(body);
  category.save().then((category) => {
    res.send({
      category,
      notice: 'Successfully created a category'
    });
  }).catch((err) => {
    res.send(err);
  });
});

router.post('/', (req, res) => {
  let body = req.body;
  let category = new Category(body);
  category.save().then((category) => {
    res.send({
      category,
      notice: 'Successfully created a category'
    });
  }).catch((err) => {
    res.send(err);
  });
});

router.put('/:id',(req, res) => {
  let id = req.params.id;
  let body = req.body;
  Category.findOneAndUpdate(id, body, {new: true }).then((category) => {
    res.send({category,
      notice: 'Successfully updated.'});
  }).catch((err) => {
    res.send(err);
  })
})

router.delete('/:id',(req, res) => {
  let id = req.params.id;
  Category.findByIdAndDelete(id).then((category) => {
    if (category){
      res.send({category,
      notice: 'Successfully deleted the record.'});
    }else{
      res.send({notice: 'record not found.'})
    }
  }).catch((err) => {
    res.send(err);
  })
})

router.get('/:id',(req, res) => {
  let id = req.params.id;
  Category.findById(id).then((categories) => {
    res.send(categories);
  }).catch((err) => {
    res.send(err);
  })
})
module.exports = {
  categoriesController: router
}