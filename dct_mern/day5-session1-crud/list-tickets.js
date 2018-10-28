var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = 'b770c42d94398f31';

// http://dct-api-data.herokuapp.com/tickets?api_key=b770c42d94398f31

//url - uniform resource locator
//protocol  -http/https
//domain( base url) = dct-api-data.herokuapp.com
//sub domain - dctg-api-data
// tld(top level domain) - com
//uri (uniform resource identifier) - /tickets
//paramter - apikey = 

axios.get(`${url}?api_key=${key}`).then((response) => {
  var tickets = response.data;
  if(tickets.length == 0){
    console.log('No tickets found');
  }else{
    console.log("*".repeat(25));
    console.log('Listing Tickets -', tickets.length)
    console.log("*".repeat(25));
    tickets.forEach(function(ticket){
      console.log(ticket);
   });
  };
}).catch((err)=>{
  console.log(err);
});