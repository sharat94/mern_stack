function Movie() {

}

Movie.data = [
  { id: 1, name: 'Harry Potter'},
  { id: 2, name: 'The day of the jackal'}
];

Movie.all = function(){
  return Movie.data;
}

Movie.findById = function(id){
  return Movie.data.find(movie => movie.id == id);
}

module.exports = {
  Movie
}