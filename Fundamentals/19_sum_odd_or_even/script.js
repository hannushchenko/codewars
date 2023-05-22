// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0](array with a zero).

function oddOrEven(array) {
  if (array.length > 0) {
    let sum = array.reduce((acc, curValue) => acc + curValue)
    return sum % 2 == 0 ? "even" : "odd"
  }
  else {
    return "even"
  }
}

//function oddOrEven(arr) {
//   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// }

console.log(oddOrEven([5, 3, 4, 5, 6]));
