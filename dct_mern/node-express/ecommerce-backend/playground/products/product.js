function Product(userDetails) {
  this.name = userDetails.name,
  this.price = userDetails.price,

  this.details = function(){
    return  `name: ${this.name}, price: ${this.price}`;
  };
}

module.exports = {
  Product
};