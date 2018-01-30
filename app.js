var combineAndCut = function (array1, array2) {
    var result = array1.concat(array2);
    console.log(result);
    result.splice(0, 1);
    console.log(result);
    result.pop();
    console.log(result);
    return result;
}



var double = function (array) {
    var result=[];
    array.forEach(function(element) {
        element = element * 2;    
        result.push(element);
    });
    return result;
}