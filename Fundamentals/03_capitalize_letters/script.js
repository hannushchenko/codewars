String.prototype.toJadenCase = function () {
    let text = this.toString().split(" ");
    let res = []

    text.forEach(word => {
        newWord = word.split("")
        newWord[0] = word[0].toUpperCase()
        newWord.join()
        console.log(newWord)
        res.push(newWord)
    });
    return res.join(" ");
};

console.log("hello qq world".toJadenCase())