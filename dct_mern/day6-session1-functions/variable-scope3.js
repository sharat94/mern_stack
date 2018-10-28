var n1 = 10;
var n2 = 20;
var n3 = 30;
var n4 = 40;

function add(n1, n2){
  var n3 = 30;
  function findSum(n1, n2){
    var sum = n1 + n2 + n3 + n4;
    return sum;
  }
  var result = findSum(n1,n2);
  // console.log(sum); //reference error
  return result;
}
console.log(add(n1, n2));
//console.log(result); reference