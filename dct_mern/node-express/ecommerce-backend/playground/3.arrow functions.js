//FUNCTION EXPRESSION
// Variation 1
const sum = (n1, n2) => {
  return n1 + n2;
}
console.log(sum(10, 2));

//Variation 2
const sum = (n1, n2) => n1 + n2;
console.log(sum(10, 2));

//FOR EACH
//VARIATION 1
numbers.forEach((n) => {
  console.log(n);
});

//VARIATION 2
numbers.forEach((n) => console.log(n));

//VARIATION 3

numbers.forEach( n => console.log(n));

//FILTER
//es5
numbers.filter(function (n){
  return n > 25;
})

//VARIATION 2 
numbers.filter((n) => {
  return n > 25;
})

//Variation 3
numbers.filter(n => n > 25)