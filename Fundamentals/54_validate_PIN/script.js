// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const findAverage = (array) => array.length === 0 ? 0 : array.reduce((cur, acc) => acc + cur, 0) / array.length

console.log(findAverage([1, 2, 3, 4, 5, 6]))