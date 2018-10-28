const { config } = require('./config'); 
var axios = require('axios');

function Ticket(data){
  this.name = data.name;
  this.department = data.department;
  this.priority = data.priority;
  this.message = data.message;
  this.viewDetails = function(){
    return (`${this.name} - ${this.department} - ${this.priority} - ${this.message}`);
  };
  this.save = function(){
    axios.post(`${config.url}?api_key=${config.api_key}`,this
      ).then((response) => {
      var ticket = response.data;
      if (ticket.errors){
        for(var error in ticket.errors){
          console.log(`${error} : ${ticket.errors[error].join('')}`)
        }
        return;
      }
      console.log(ticket); 
    }).catch((err) => {i
      console.log(err);
    });
  };
}


var t1 = new Ticket({
  name: 'Rahul',
  department: 'Technical',
  priority: 'High',
  message: 'Need Support'
});

console.log(t1.viewDetails());

t1.save();