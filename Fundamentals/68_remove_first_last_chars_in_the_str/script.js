//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => str.split("").splice(1, str.length - 2).join("");

//const removeChar = str => str.slice(1,-1)

//function removeChar(str){
// return str.substring(1, str.length-1);
//};

//const removeChar = (str) => str.replace(/^.|.$/g, '');

//const removeChar = (str) => str.replace(/^\w|\w$/g, '')

//with (require('ramda'))
//  removeChar = pipe(tail, init)

console.log(removeChar('string'));