var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = 'b770c42d94398f31';
var code = 'DCT-f64e';
var updateTicket = {
  status: 'completed'
};

axios.patch(`${url}/${code}?api_key=${key}`, updateTicket)
.then((response) => {
  var ticket = response.data;
  if(ticket.errors){
    console.log(ticket.errors);
  } else {
    console.log(ticket);
  }
}).catch((err) => {
  console.log(err);
});