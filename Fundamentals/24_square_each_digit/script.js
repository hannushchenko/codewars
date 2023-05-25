// You are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
    let modNum = [];
    while (num > 0) {
        modNum.unshift(Math.pow(num % 10, 2))
        num = Math.floor(num / 10)
    }
    return isNaN(parseInt(modNum.join(""))) ? 0 : parseInt(modNum.join(""));
}

//function squareDigits(num){
//  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
//}

console.log(squareDigits(9192));