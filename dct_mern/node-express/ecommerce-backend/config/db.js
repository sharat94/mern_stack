const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern-week-ecommerce', {
  useNewUrlParser: true
}).then((res) => {
  console.log('connected to db');
}).catch((err) => {
  console.log(err);
})

module.exports = {
  mongoose
}