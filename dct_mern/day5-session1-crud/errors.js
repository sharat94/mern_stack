var value = {
  errors: {
    email: ['invalid format'],
    password: ['cant be blank', 'minimum length is 8']
  }
}
var count = 0;
for(var error in value.errors){
  count += value.errors[error].length;
}

console.log('Total Errors', count)


var count = 0;
Object.values(value.errors).forEach(function(error){
  count += error.length;
})

console.log('Total Errors', count);