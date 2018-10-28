/*
    falsy - false, ``, undefined, 0, NaN
    truthy - 1, 2, 'ani', [], {}, 1, true
*/

var values = [10, 20, 30, '', 40, undefined, 'dct academy', [],
{}, -1, 0, 1, true];

values.forEach(function(value){
    if(value){
        console.log(value);
    }
});

function filterValuesArr(values){
    var truthy = [], falsy = [];
    values.forEach(function(value){
        if(value){
            truthy.push(value);
        }else{
            falsy.push(value);
        }
    })
    return [truthy, falsy];
}

function filterValuesObj(values){
    var truthy = [], falsy = [];
    values.forEach(function(value){
        if(value){
            truthy.push(value);
        }else{
            falsy.push(value);
        }
    })
    return {truthy: truthy, falsy: falsy};
    
    // concise properties and methods - es6 where if the key and value names are same just return the value names
    return {
        truthy,
        falsy
    }
}

console.log(filterValuesArr(values));
console.log(filterValuesObj(values));