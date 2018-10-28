var url = `http://dct-api-data.herokuapp.com/tickets`;
var apiKey = 'b770c42d94398f31';

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm');
var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var messageHandle = document.getElementById('message');
var highHandle = document.getElementById('high');
var mediumHandle = document.getElementById('medium');
var lowHandle = document.getElementById('low');
var progressHandle = document.getElementById('progress');
var gifHandle = document.getElementById('gif');


function buildRow(ticket){
  return `
      <tr>
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td> 
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td>
        <td>${fetchCheckboxValue(ticket)}</td>
      </tr>
  `;
}
axios.get(`${url}?api_key=${apiKey}`).then(function(response){
  var tickets = response.data;
  console.log(tickets);
  countHandle.innerHTML = tickets.length;
  var output = '';
  tickets.forEach(function(ticket){
    output += buildRow(ticket);
  });
  tableBodyHandle.innerHTML = output;
  gifHandle.setAttribute('style', 'display: none');
  progressHandle.setAttribute('value', calculatePercentage(tickets));
}).catch(function(error){

});

var fetchCheckboxValue = function(ticket){
  if (ticket.status == 'open'){
    return `<input type="checkbox" id=${ticket.id} value=${ticket.ticket_code} onclick= 'updateStatusCheckbox(this, true)'></input>`
  }else{
    return `<input type="checkbox" id=${ticket.id} value=${ticket.ticket_code}  onclick= 'updateStatusCheckbox(this, false)' checked></input>` 
  }
}

var updateStatusCheckbox = function(ticket, status){
  if (status == false){
    var status = { status: 'open' };
    axios.put(`${url}/${ticket.value}?api_key=${apiKey}`, status).then(function(response){
      var ticket = response.data;
      console.log(ticket);
    }).catch(function(err){
      console.log(err);
    }); 
  }else{
    var status = { status: 'completed' };
    axios.put(`${url}/${ticket.value}?api_key=${apiKey}`, status).then(function(response){
      var ticket = response.data;
      console.log(ticket);
    }).catch(function(err){
      console.log(err);
    }); 
  }
};
var calculatePercentage = function(tickets){
  var completedTickets = tickets.filter(function(ticket){
    return ticket.status == 'completed';
  });
  return (completedTickets.length/tickets.length) * 100
}

ticketFormHandle.addEventListener('submit', function(e){
  e.preventDefault();
  console.log(e);
  var data = {
    name: nameHandle.value,
    department: departmentHandle.value,
    priority: highHandle.checked ? highHandle.value :
    (mediumHandle.checked ? mediumHandle.value : lowHandle.value),
    message: messageHandle.value
  };
  axios.post(`${url}?api_key=${apiKey}`, data).then(function(response){
    var ticket = response.data;
    countHandle.innerHTML = Number(countHandle.innerHTML) + 1;
    ticketFormHandle.reset();
    tableBodyHandle.innerHTML += buildRow(ticket);
  }).catch(function(err){
    console.log(err);
  });
}, false);

