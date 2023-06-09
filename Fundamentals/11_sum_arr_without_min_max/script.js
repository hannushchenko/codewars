// Description

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  return (array.reduce((accumulator, recentValue) => {
    return (accumulator + recentValue);
  }, 0)) - Math.max(...array) - Math.min(...array)
}

console.log(openOrSenior([1, 35, 9, 60, 9]))