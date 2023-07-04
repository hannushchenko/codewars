// https://www.codewars.com/kata/542c0f198e077084c0000c2e/

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        n % i === 0 ? arr.push(i) : arr
    }
    return arr.length + 1;
}

//   function getDivisorsCnt(n){
//       var num=0;
//       if(n==1) return 1;
//       if(n%Math.sqrt(n)==0) num++;
//       for(var i=1;i<Math.sqrt(n);i++){
//           if(n%i==0){
//               num+=2;
//           }
//       }
//       return num;
//   }

console.log(getDivisorsCnt(12));