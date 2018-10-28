var numbers = [10,20];

//pass by reference
function addToNum(numbers){
  console.log('inside function before pushing', numbers);
  numbers.push(30, 40);
  console.log('inside function after pushing', numbers);
}

console.log('before function', numbers);
addToNum(numbers);
console.log('outside function', numbers);

var person = {
  firstName: 'ravi'
}

function changeFirstName(person){
  console.log('inside function before updating', person);
  person.firstName = 'Gokul';
  console.log('inside function after update', person);
}

console.log('before function', person);
changeFirstName(person);
console.log('after function', person);