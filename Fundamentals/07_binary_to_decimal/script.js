//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  let res = 0

  for (i in arr) {
    res += arr[i] * Math.pow(2, arr.length - i - 1);
  };

  return res;
};

console.log(binaryArrayToNumber([1, 0, 1, 1]));

//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);