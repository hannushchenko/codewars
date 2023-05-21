// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s) {
  let sarr = s.split(" ");
  let smin = sarr[0].length
  sarr.forEach(item => item.length < smin ? smin = item.length : smin = smin)

  return smin
}

console.log(findShort('return the length of the shortest word'));
