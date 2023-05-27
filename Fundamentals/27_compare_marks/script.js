//You receive an array with your peers' test scores. Now calculate the average and compare your score!

//Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce(((acc, cur) => acc + cur), 0)) / classPoints.length < yourPoints ? true : false;
}

console.log(betterThanAverage([1, 2, 1, 1, 2, 3], 5));