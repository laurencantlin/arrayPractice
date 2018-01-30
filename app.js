var combineAndCut=function(array1,array2){
    var result = array1.concat(array2);
    result.splice(0,1);
    result.splice(result.lastIndexOf, 1);
    return result;
}