// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score  Letter Grade
// 90 <= score <= 100  'A'
// 80 <= score < 90  'B'
// 70 <= score < 80  'C'
// 60 <= score < 70  'D'
// 0 <= score < 60  'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

const getGrade = (s1, s2, s3) => (s1 + s2 + s3) / 3 >= 90 ? 'A' : (s1 + s2 + s3) / 3 >= 80 ? 'B' : (s1 + s2 + s3) / 3 >= 70 ? 'C' : (s1 + s2 + s3) / 3 >= 60 ? 'D' : 'F'

// var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

// function getGrade (s1, s2, s3) {
//  var avg = (s1 + s2 + s3)/3;
//  switch(true) {
//    case (avg >= 90):
//      return 'A';
//    case ( avg >= 80):
//      return 'B';
//    case ( avg >= 70):
//      return 'C';
//    case ( avg >= 60):
//      return 'D'; 
//    default:
//      return 'F';   
//  }
// }

console.log(getGrade(90, 50, 95));