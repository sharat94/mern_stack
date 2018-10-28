var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = 'b770c42d94398f31';
var code = 'DCT-f64e';


axios.delete(`${url}/${code}?api_key=${key}`).then((response) => {
  var ticket = response.data;
    console.log(ticket);
}).catch((err) => {
  console.log(err);
});