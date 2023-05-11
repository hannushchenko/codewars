//get binary value of decimal num

function get_binary(num) {
    let res = [];
    while (num > 0) {
        res.unshift(num % 2);
        num = Math.floor(num / 2);
    }

    res = res.join("");
    console.log(res);
}


get_binary(21);
