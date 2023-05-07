function reverseWords(str) {
    // Go for it
    let array_from_str = str.split(" ");
    let arr_reverse = [];
    let str_reverse = [];


    array_from_str.forEach(function (str) {
        for (letter in str) {

            str_reverse.unshift(str[letter]);
            console.log(letter)

            if (letter == str.length - 1) {
                arr_reverse.push(str_reverse.join(''))
                str_reverse = []
            }
        }


    })

    return arr_reverse.join(' ');
}

console.log(reverseWords("hello world sasha"))