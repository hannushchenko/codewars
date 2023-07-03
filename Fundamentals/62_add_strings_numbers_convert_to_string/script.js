// https://www.codewars.com/kata/5966e33c4e686b508700002d

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"


// const sumStr = (a,b) => Number(a) + Number(b) + ''
// const sumStr = (a,b) => `${parseInt(a) + parseInt(b)}`
const sumStr = (a, b) => `${(+a) + (+b)}`

console.log(sumStr('5', '10'))