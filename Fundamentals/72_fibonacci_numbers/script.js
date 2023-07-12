//https://www.codewars.com/kata/5541f58a944b85ce6d00006a

// function productFib(prod){
//     let arrFib = [0,1];
//     let temp = 0;
//     for (i = 0; i<50; i++){
//       arrFib[i] < Math.sqrt(prod) ? temp = i : temp = temp;
//       arrFib.push(arrFib[i]+arrFib[i+1])
//     }
//     // console.log(arrFib);
//     arrFib.splice(temp+1, 0, Math.sqrt(prod))
//     // console.log(arrFib);

//     let finalArr = [];
//     if (arrFib[temp] * arrFib[temp+2] === prod ){
//       finalArr[0] = arrFib[temp]
//       finalArr[1] = arrFib[temp+2]
//       finalArr[2] = true;
//     }else if(arrFib[temp] * arrFib[temp+2] < prod ){
//       finalArr[0] = arrFib[temp]
//       finalArr[1] = arrFib[temp+2]
//       finalArr[2] = false;
//     }else if(arrFib[temp] * arrFib[temp+2] > prod ){
//       finalArr[0] = arrFib[temp+2];
//       finalArr[1] = arrFib[temp+3];
//       finalArr[2] = false;
//     }
//     return finalArr;
//   }

function productFib(prod) {
    let [a, b] = [0, 1];
    while (a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
}