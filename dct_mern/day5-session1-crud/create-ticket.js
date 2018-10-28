var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = 'b770c42d94398f31';
var ticket = {
  name: 'Ravi',
  department: 'Technical',
  priority: '',
  message: ''
};
axios.post(`${url}?api_key=${key}`,ticket).then((response) => {
  var ticket = response.data;
  if (ticket.errors){
    for(var error in ticket.errors){
      console.log(`${error} : ${ticket.errors[error].join('')}`)
    }
    return;
  }
  console.log(ticket); 
}).catch((err) => {
  console.log(err);
});