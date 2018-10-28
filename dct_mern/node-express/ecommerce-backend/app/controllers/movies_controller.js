const express = require('express');
const router = express.Router();
const { Movie } = require('../models/movies');

router.get('/', (req, res) => {
  res.send(Movie.all());
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let movie = Movie.findById(id);
  if(book){
    res.send(movie);
  }else{
    res.send({
      notice: 'book not found'
    })
  }
});

module.exports = {
  moviesController: router
}