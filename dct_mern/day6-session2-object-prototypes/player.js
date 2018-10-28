var sachin = {
  firstName: 'Sachin',
  lastName: 'Tendulkar',
  runs: [ 40, 50, 60],
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  },
  calculateAvg: function(){
    var total = 0;
    this.runs.forEach(function(run){
      total += run;
    })
    return total / this.runs.length;
  }
};

  console.log(typeof sachin); //Object

  console.log(sachin.fullName());
  console.log(sachin.calculateAvg());

  var virat = {
    firstName: 'sachin',
    lastName: 'Tendulkar',
    runs: [20, 30, 40],
    fullName: function (){
      var total = 0;
      this.runs.forEach(function (run) {
        total += run;
      })
      return total / this.runs.length;
    }
  }
 
  function Player() {
    this.firstName;
    this.lastName;
    this.runs;
    this.fullName = function(){
      return this.firstName + ' ' + this.lastName;
    };
    this.calculateAvg = function(){
      var total = 0;
      this.runs.forEach(function(run){
        total += run;
      })
      return total / this.runs.length;
    }
  };
  var sachin = new Player();
  sachin.firstName = 'Sachin';
  sachin.lastName = 'Tendulkar';
  sachin.runs = [40, 50, 60];
  console.log(sachin.fullName());
  console.log(sachin.calculateAvg());