const http = require('http');
const port = 3000;
//const url = require('url');

//index, about, services, products, contact
// 127.0.0.1:300/
// localhost:3000/about
// localhost:3000/products

function requestHandler(request, response){
  console.log('incoming request', request.url);
  if(request.url == '/'){
    response.setHeader('Content-Type', 'text/html');
    response.end('<h2> home page</h2>')
  } else if(request.url == '/about') {
    response.setHeader('Content-Type', 'text/plain');
    response.end('about us page')
  } else if(request.url == '/products') {
    const products = [
      {id: 1, name: 'marker'},
      {id: 2, name: 'scale'}
    ]
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(products));
  } else {
    response.end('page not found');
  }
}

const server = http.createServer(requestHandler);
server.listen(port, function(){
  console.log('listening to port', port);
});