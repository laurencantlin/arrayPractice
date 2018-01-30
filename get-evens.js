var arr = [1,2,3,4,5,6];
var arr2 = [7,8,9,10,11,12];

arr2.push(13,14);
var newArr = [];

var anotherArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

var even = function (anotherArr){
    for (var i=0; i < anotherArr.length; i++) {
        if ((anotherArr[i] % 2) === 0){
            newArr.push(anotherArr[i]);
                console.log(newArr);
        }
    }
};
even(anotherArr);

