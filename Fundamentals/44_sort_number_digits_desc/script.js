// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples: Input: 42145 Output: 54421

let descendingOrder = (n) => +((n + "").split("").sort(function (a, b) { return b - a }).join(""))

//function descendingOrder(n){
//  return parseInt(String(n).split('').sort().reverse().join(''))
//}

// function descendingOrder(n) {
//   return n.digits().sort().reverse().undigits();
// }

// Number.prototype.digits = function() {
//   const result = [];
//   let n = this;
//   do {
//     result.unshift(n % 10);
//     n = Math.floor(n / 10);
//   } while(n);
//   return result;
// };

// Array.prototype.undigits = function() {
//   return this.reduce((n, d) => n * 10 + d, 0);
// };

console.log(descendingOrder(5521315))