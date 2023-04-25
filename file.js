//add 6 numbers and for that write a callback because the other numbers are provided

// function add1(a, b, add2){
//     add2(c, add3){

//     add3(d, add4){
//       return a + b + c +d
//     }
//   }
// }
//dfbfdndn

const promise1 = Promise.resolve(2)
  .then((res) => res * 2)
  .then((res) => res * 3);
