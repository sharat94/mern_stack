function User(details){
  this.username = details.username,
  this.email = details.email,
  this.details = function(){
    return `username: ${this.username}, email: ${this.email}`;
  }

}

module.exports = {
  User
};