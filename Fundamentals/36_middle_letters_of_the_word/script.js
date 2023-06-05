//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a ? true : false;
}

//var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

console.log(isTriangle(4, 3, 6));