// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:  1.08 --> 30

const cockroachSpeed = (s) => Math.floor((s * 1000 * 100) / (60 * 60))

console.log(cockroachSpeed(1.08))