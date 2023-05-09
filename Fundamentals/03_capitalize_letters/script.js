String.prototype.toJadenCase = function () {
    let text = this.toString().split(" ");

    console.log(text)
    text.forEach(word => {
        console.log(word[0])

        word[0] = word[0].toUpperCase();
        console.log(word[0].toUpperCase())

    });

    return text.join(" ");
};

console.log("hello qq world".toJadenCase())