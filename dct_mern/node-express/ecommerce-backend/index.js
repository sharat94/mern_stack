var express = require('express');
var app = express();
const { routes } = require('./config/routes');
const { mongoose } = require('./config/db.js')
// localhost:3000/books
app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('listening on port 3000');
}); 