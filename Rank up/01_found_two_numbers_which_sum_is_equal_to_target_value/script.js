// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    let res = [];
    numbers.forEach((item, index) => {
        for (let i = index + 1; i <= numbers.length; i++) {
            if (target === item + numbers[i]) {
                res.push(index)
                res.push(i)
                break;
            }
        }
    })
    return res.splice(0, 2);
}

//   function twoSum(numbers, target) {
//     for(var i = 0; i < numbers.length; i++) {
//       for(var j = 0; j < numbers.length; j++) {
//         if(i !== j && numbers[i] + numbers[j] === target) { 
//           return [i,j]
//         }
//       }
//     }
//     return [];
//   }

console.log(twoSum([1, 1, 0, 5], 5));