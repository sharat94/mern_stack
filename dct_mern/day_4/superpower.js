function superPower(a,b){
	if (!b){
		return 'invalid input';
	}
	var powers = a.find(function(superhero){ if (superhero.name == b) { return superhero.powers; }});
	if (!powers){
		return `${b} is not in the super heroes list`;
	}else{
		return powers.powers.toString();
	}
}
var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
console.log( superPower(superHeroes, "Molecule Man"))