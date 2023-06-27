// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function strCount(str, letterToCount) {
    let regExp = new RegExp(letterToCount, "g");
    return str.match(regExp).length
}

function count(userString) {
    let obj = {}
    let arr = userString.split("")
    arr.forEach(letter => obj[letter] = strCount(userString, letter))

    return userString === "" ? {} : obj;
}

//const count = string =>
//  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

console.log(count('AbCBaaE'));