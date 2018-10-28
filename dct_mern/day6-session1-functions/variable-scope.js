var n1 = 10;
var n2 = 20;

console.log(n1, n2)

function add(){   //return sum from global scope
  return n1 + n2;
}

function add(){ // overwriting n1 and n2 over global scope 
  n1 = 100;
  n2 = 200;
  return n1 + n2;
}

console.log(add(n1, n2)) // over written values will be output

function add(n1, n2){ // shadow copy of n1 and n2 in function scope is created
  n1 = 100;
  n2 = 200;
  return n1 + n2;
}

console.log(n1, n2) // global values of n1, n2 arent overwritten

//