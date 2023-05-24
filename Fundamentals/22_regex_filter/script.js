//Write a function that will filter array of words that starts with "Beg"-string.

function test(array) {
    return array.filter((item) => {
        return item.match(/^C.t\w*/gi)
    })
}


console.log(test(["Cat", "Category", "City", "Cute", "Cent", "Center"]));