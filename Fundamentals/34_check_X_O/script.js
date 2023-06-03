// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true

function XO(str) {
    let xItem = 0, oItem = 0;
    str.toLowerCase().split("").forEach(item => { item === 'x' ? xItem++ : item === 'o' ? oItem++ : item });
    return xItem === oItem;
}

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
//   }

// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

console.log(XO('xooOXX'))