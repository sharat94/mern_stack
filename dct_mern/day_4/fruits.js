var fruits = ['apple','mango'];

var newValues = []
fruits.forEach(function(fruit) {
    newValues.push('i like' + fruit); 
})
console.log(newValues)

var result = fruits.map(function(fruit){
    return 'i like ' + fruit;
})
console.log(result); 