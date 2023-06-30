https://www.codewars.com/kata/54edbc7200b811e956000556/

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// [true,true,true,false,true,true,true,true ,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]

let countSheeps = (arrayOfSheep) => {
    return arrayOfSheep.reduce((acc, cur) => typeof cur === "boolean" ? acc + cur : acc, 0)
}

//function countSheeps(arr) {
//  return arr.filter(Boolean).length;
//}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));