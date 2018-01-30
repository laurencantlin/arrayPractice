var arr = [1,2,3,4,5,6];
var arr2 = [7,8,9,10,11,12];


var newArr = combineAndCut(arr,arr2);
console.log("newArr: ", newArr);

var anotherArr = getEvens(newArr);

var thirdArr = double(arr);
console.log("thirdArr: ", thirdArr);

var maximum = max(thirdArr);
var minimum = min(thirdArr);

console.log(maximum);
console.log(minimum);