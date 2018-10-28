function Book() {

}

Book.data = [
  { id: 1, name: 'Harry Potter', author: 'JK Rowling'},
  { id: 2, name: 'The day of the jackal', author: 'Fredrick Forys'}
];

Book.all = function(){
  return Book.data;
}

Book.findById = function(id){
  return Book.data.find(book => book.id == id);
}

module.exports = {
  Book
}