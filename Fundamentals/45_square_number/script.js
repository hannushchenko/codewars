// Given an integral number, determine if it's a square number:
var isSquare = function (n) {
    return Math.sqrt(n, 2) % 1 === 0;
}

//const isSquare = n => Number.isInteger(Math.sqrt(n));

//var isSquare = function(n){
//  n = Math.sqrt(n);
//  return ~~n === n;
//}

console.log(descendingOrder(9))