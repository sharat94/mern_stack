var axios = require('axios');

//HTTP METHODS - GET, POST, DELETE, PUT
var url = `https://jsonplaceholder.typicode.com/users`;
axios.get(url).then(function(response){
    console.log(`Listing Users`);
    response.data.forEach(function(user){
        console.log(`${user.id} ${user.name} - ${user.email} - ${user.address.street} - ${user.address.zipcode} - (${user.address.geo.lat}, ${user.address.geo.lng}) - ${user.phone} - ${user.website} - ${user.company.name}`);
    })   
})

//console.log('im written after the code');