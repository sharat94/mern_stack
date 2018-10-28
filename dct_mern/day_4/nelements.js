function lastNElements(a,b){
	if (!b){
		return a.slice(-1).pop();
	}	
	if(!a){
		var c = 'empty array';
		return c;
	}
	if (b > a.length){
		return a;
	}
	var new_arr = [];
for(var i = 0; i < b; i++){
	a.reverse();
	new_arr.push(a[i]);
}
	return new_arr.reverse();
}

console.log(lastNElements([7, 9, 0, -2],3)); 