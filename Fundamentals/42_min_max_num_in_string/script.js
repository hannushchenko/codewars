// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

let SeriesSum = (n) => {
    let sum = 0;
    n === 0 ? sum = 0 : sum = 1;
    while (n > 1) {
        n--;
        sum += 1 / (n * 3 + 1)
    }
    return sum.toFixed(2);
}

//function SeriesSum(n, s = 0) {
//    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
//}

//function SeriesSum(n) {
//  return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
//}...(numbers.split(" ")))} ${Math.min(...(numbers.split(" ")))}`

console.log(highAndLow(6))