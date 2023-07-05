// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

let past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000

console.log(past(0, 10, 15));