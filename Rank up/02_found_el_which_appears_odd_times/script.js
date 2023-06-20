// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(A) {
    A.sort();
    for (let i = A.length; i >= 0; i--) {
        if (A[i] === A[i - 1]) {
            A.splice(i - 1, 2);
        } else {
            continue;
        }
    }
    return A[0];
}

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//function findOdd(arr) {
//  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
//}

//function findOdd(A) {
//  var trace = {};
//  A.forEach(function(x) {
//    if (trace[x]) delete trace[x];
//    else trace[x] = true;
//  });
//  return parseInt(Object.keys(trace)[0]);
//}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));