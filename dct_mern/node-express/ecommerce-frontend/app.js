var url = `http://localhost:3000/products`;
var axios = require('axios');

var categoryHandle = document.getElementById('category');
categoryHandle.addEventListener('click', function(e){
  axios.get(url).then(function(response){
    
  }).catch(function(err){
    console.log(err.code);
  });
});