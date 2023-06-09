// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

let areYouPlayingBanjo = (name) => name.startsWith("R") || name.startsWith("r") ? `${name} plays banjo` : `${name} does not play banjo`;

//function areYouPlayingBanjo(name) {
//  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
//}

console.log(areYouPlayingBanjo('Roman'))