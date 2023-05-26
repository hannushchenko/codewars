//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    return [...Array(num + 1).keys()].reduce((acc, cur) => { return acc + cur }, 0)
}

//var summation = function (num) {
//   return (num) ? num + summation(num - 1) : num;
//}

//const summation = n => n * (n + 1) / 2;

//const summation = num => (
// Array(num).fill(true)
//   .reduce((sum, item, index) => sum + index + 1, 0)
//);

console.log(summation(5));
