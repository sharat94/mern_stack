var axios = require('axios');

//HTTP METHODS - GET, POST, DELETE, PUT
var name = 'srinath';
var key = 'pRPLCejozFwCHFbVCR'
var url = `https://gender-api.com/get?name=${name}&key=${key}`;
axios.get(url).then(function(response){
    console.log(`the gender of ${response.data.name} is ${response.data.gender}`);
}).catch(function(err){
    console.log(err.code);
});

//console.log('im written after the code');