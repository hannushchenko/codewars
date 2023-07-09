// https://www.codewars.com/kata/577bd026df78c19bca0002c0/
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

let correct = (string) => string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I")

//const corrections = {
// '5': 'S',
// '0': 'O',
// '1': 'I',
//};

//const correct = string => (
// string.replace(/[501]/g, character => corrections[character])
//);

console.log(correct('REM0VE'));