// functions are first class citizens

var n1 = 10;
var n2 = 20;
var add = function(n1,n2){
  return n1 + n2;
}

console.log(add);
console.log(add(n1 + n2));

//higher order functions - whenever we pass function as an argument to another function ***

// function expression
var display = function(msg){
  console.log(msg);
}

function displayMessage(display){
  display('ive been invoked inside the displayMessage function');
  console.log('im back inside the display message function');
}

console.log(displayMessage(display));

// function declaration
// function displayNumber(n){
// console.log(n)
// }

var displayNumber = function(n){
  console.log(n);
}

var numbers = [10,20,30,40];
numbers.forEach(displayNumber);