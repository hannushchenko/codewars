//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
    let str = ""
    for (i = 0; i < num; i++) {
        str += `${i + 1} sheep...`
    }
    return str;
}

//countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

console.log(countSheep(8));
