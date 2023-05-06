function reverseWords(str) {
    // Go for it
    let arr_str = str.split(" ");
    let arr_reverse;
    let reverse_fun = arr_str.forEach(function (str) {
        let str_reverse;
        for (l in str) {
            str_reverse.unshift(l);
        }
        str_reverse.push;
        return str_reverse;
    })
}

console.log(reverseWords("hello world"))