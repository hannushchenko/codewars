// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => s.split("!").join("");

//function removeExclamationMarks(s) {
//  return s.replace(/!/gi, '');
//}

console.log(removeExclamationMarks("1234! !eheh"))