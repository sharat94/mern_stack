var amount = 100;
var discount = 10;

function findTotal(amount, discount){
  console.log(amount, discount)
  //discount = (typeof discount == undefined) ? 5 : discount;
  amount = discount || 5;
  discount = discount || 7;
  console.log(amount, discount);
}

findTotal(amount);
findTotal(amount, discount);
findTotal(undefined, discount);

//es6

function finalBill(amount = 0, discount = 0){ //  setting the default value in es6
  console.log(amount, discount);
}

finalBill();
finalBill(amount);
finalBill(amount, discount);
finalBill(undefined, discount);
