var n1 = 10;
var n2 = 20;

// function add(n1, n2){
//   n1 = 100;
//   n2 = 200;
//   //return n1 + n2 + n3; Reference error ( n3 is not in function scope nor in global scope)
// }

//console.log(add(n1,n2));

function add(n1,n2){
  var result = n1 + n2;
  return result; // life of result is only within the add function
}

console.log(add(n1,n2));
//console.log(result); throws an reference Error - here result is defined inside the add function and hence not available outside the function