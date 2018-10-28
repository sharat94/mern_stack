function findProduct(a,b){
  //type code here
    var value = a.find(function(key){ if (key.id == b) { return key} });
    if (!value){
      return `No product found with id = ${b}`
    }else{
      return value
    }
  }