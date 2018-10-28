const express = require('express');
const app = express();
const port = 3000;


//route handler
//app.METHOD(PATH, FUNCTION)

//Get localhost:3000/
app.get('/', function(request,response){
  console.log('incoming request', request.url);
  response.send('<h2>Home page</h2>');
});

//localhost:3000/products
app.get('/products', (req, res) => {
  console.log('incoming request', req.url);
  res.send([{name: 'marker'}, {name: 'scale'}]);
});

app.listen(port, function(){
  console.log('listening on port', port);
});