//Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str) {
    return str.split("").filter(item => !item.match(/^[aeiou]$/ig)).join("");
}

//function disemvowel(str) {
//  return str.replace(/[aeiou]/gi, '');
//}

console.log(disemvowel('Remove vowels pls'));
