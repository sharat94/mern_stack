function frequency(a){
  var count = {};
  for (var i = 0; i < a.length; i++){
    unless count[a.charAt(i)]
    count[a.charAt(i)] = 0;
    count[a.charAt(i)] += 1;
};
	return count;
}

console.log( frequency('abca')); 