var error = function(e){
  console.log('making an api request to the central error logging system');
  console.log(e);
};

var success = function(res){
  console.log('performing some success operations');
  console.log(res);
} 

function randomNumber(error, success){
  var random = Math.random * 100;
  if (random > 75) {
    success(random);
  } else {
    error(random);
  }
}

randomNumber(error, success);
randomNumber(function(e){
  console.log('making an api request to the central error logging system');
  console.log(e);
}, function(res){
  console.log('performing some success operations');
  console.log(res);
} );