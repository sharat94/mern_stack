var person = {
  firstName: 'Sharat',
  lastName: 'Oommen',
  city: 'Bangalore',
  details: function(){
    return `${this.firstName} lives in ${this.city}`;
  }
}

console.log(person.firstName);
console.log(person['city']);
console.log(person.details());

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.keys(person).length)

// find out if a property exists
console.log(person.hasOwnProperty('firstName'));
// Object.keys(person).includes('firstName');

//find out if a value exists
console.log(Object.values(person).includes('ravi'));
console.log(person.bio);


//loop over an object
for(var key in person) {
  //console.log(key, person[key]);
}

//forEach
Object.keys(person).forEach(function(key){
  console.log(person[key]);
});

// deleting a property from an object
delete person['details'];
console.log(person);

//add property
person.skills = ['js', 'rb', 'py'];
console.log(person);

//count no of key valuer pairs
console.log(Object.keys(person).length),

//when property to be added is in a variable
var newKey = 'bio';
person[newKey] = 'full stack developer';
console.log(person);

person.programmingLanguages = function(){
  return 'list of languages known';
}

console.log(person.programmingLanguages());