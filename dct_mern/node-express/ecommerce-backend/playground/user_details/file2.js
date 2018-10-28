module.exports = {
  firstName: 'ravi',
  lastName: 'teja',
  details: function(){
    return `firstName: ${firstName}, lastName: ${this.lastName}`
  }
}