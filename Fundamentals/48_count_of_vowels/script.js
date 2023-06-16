// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str, acc = 0) => {
    str.split('').forEach(item => item.match(/[aeiou]/ig) ? acc++ : acc)
    return acc;
}

//function getCount(str) {
//  return (str.match(/[aeiou]/ig)||[]).length;
//}

//function getCount(str) {
// return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//}

console.log(getCount('Lets check count of vowels'))