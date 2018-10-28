const { User } = require('./user.js')
const file2 = require('./file2.js')
const file1 = require('./file1.js')

u1 = new User ({username: 'sharat', email: 'sharatoommen94@gmail.com'})
console.log(u1.details());

console.log(file2.firstName)
console.log(file1());

console.log(module);