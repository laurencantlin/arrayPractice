var arr = [1,2,3,4,5,6];
// document.getElementById("demo").innerHTML = myArrayMax(thirdArr);

function max(arr) {
    return Math.max.apply(null, arr);
    console.log(max)
}
max(arr);

// document.getElementById("demo").innerHTML = myArrayMin(thirdArr);

function min(arr) {
    return Math.min.apply(null, arr);
    console.log(min)
}
min(arr);