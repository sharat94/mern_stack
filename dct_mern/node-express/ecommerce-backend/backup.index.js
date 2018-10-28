// var express = require('express');
// var app = express();
// app.use(express.json());

// var responseFormat = (response, resp) => {
//   if (response){
//     resp.send(response)
//   } else {
//     resp.send({notice: 'product you are looking for does not exist'})
//   }
// }
// app.get('/', (req, res) => {
//   res.send('<h2> Hello World </h2>');
// });

// app.get('/about', (req, res) => {
//   res.send('<h2>About the company </h2>');
// });

// app.get('/contact', (req, res) => {
//   res.send('<h2>Contact Details </h2>');
// });

// //dummy data storage
// let products = [
//   {id: 1, name: 'Marker', price: 15, category: 'writing'},
//   {id: 2, name: 'Scale', price: 10, category: 'measuring'},
//   {id: 3, name: 'Board', price: 25, category: 'planks'}
// ];

// app.get('/products', (req, res) => {
//   res.send(products);
// });

// app.post('/products', (req, res) => {
//   let prod = req.body;
//   products.push({
//     prod
//   });
//   res.send({notice: 'Product successfully added.'});
// })

// app.get('/products/:id', (req, res) => {
//   let id = req.params.id;
//   let product = products.find(prod => prod.id == id );
//   if(product){
//     res.send(product);
//   } else {
//     res.send({
//       notice: 'product you are looking for does not exist'
//     });
//   }
// });

// app.get('/products/:name', (req, res) => {
//   let name = req.params.name;
//   let filteredProducts = products.filter(prod => prod.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 );
//   if(filteredProducts){
//     res.send(filteredProducts);
//   } else {
//     res.send({
//       notice: 'product you are looking for does not exist'
//     });
//   }
// });

// let users = [
//   { id: 1, email: '1@gmail.com', name: 'user1'},
//   { id: 2, email: '2@gmail.com', name: 'user2'},
//   { id: 3, email: '3@gmail.com', name: 'user3'}
// ];

// //localhost:3000/users - send all users
// app.get('/users', (req, res) => {
//   res.send(users);
// });

// app.get('/users/:id', (req, res) => {
//   let id = req.params.id;
//   let user = users.find(u => u.id == id );
//   if(user){
//     res.send(user);
//   } else {
//     res.send({
//       notice: 'product you are looking for does not exist'
//     });
//   }
// });

// app.get('/users/show/name/:name', (req, res) => {
//   let name = req.params.name;
//   let filteredNameUser = users.find(u => u.name.toLowerCase() == name.toLowerCase() );
//   if(filteredNameUser){
//     res.send(filteredNameUser);
//   } else {
//     res.send({
//       notice: 'product you are looking for does not exist'
//     });
//   }
// });

// app.get('/users/show/email/:email', (req, res) => {
//   let email = req.params.email;
//   let filteredEmailUser = users.find(u => u.email == email );
//   if(filteredEmailUser){
//     res.send(filteredEmailUser);
//   } else {
//     res.send({
//       notice: 'product you are looking for does not exist'
//     });
//   }
// });

// app.get('/users/profile/:profile', (req, res) => {
//   let profile = req.params.profile;
//   let filteredProfileUser = users.find(u => u.name.toLowerCase() == profile.toLowerCase() );
//   if(filteredProfileUser){
//     res.send(filteredProfileUser);
//   } else {
//     res.send({
//       notice: 'product you are looking for does not exist'
//     });
//   }
// });

// app.get('/categories/:category/products', (req, res) => {
//   let category = req.params.category;
//   let filteredProducts = products.filter(prod => prod.category == category)
//   responseFormat(filteredProducts);
// });

// app.get('/categories/:category/products/:id', (req, res) => {
//   let category = req.params.category;
//   let id = req.params.id;
//   let filteredProducts = products.filter(prod => prod.category == category)
//   let requiredProduct = filteredProducts.find(prod => prod.id == id)
//   responseFormat(requiredProduct, res);
// });

// // localhost:3000/categories/1/products 
// // localhost:3000/categories/1/products/2

// app.listen(3000, () => {
//   console.log('listening on port 3000');
// });