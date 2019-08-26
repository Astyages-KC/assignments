   // } else {
    //     return "odd"
    // }
    // console.log(oddOrEven(8));
// console.log(oddOrEven(7))
// console.log(oddOrEven(6))

// another way to do this
// evenOrOdd = (x) => {
//     if (x % 2 === 0){
//         return "even";
//     }else return "odd";
//  }
//  console.log(evenOrOdd(9));

let myString = function(str) {
    if (str.length <= 20) {
    return str.concat(str)
    }   else {
    return str.slice(0, str.length / 2) ;  
}
}
console.log(myString("abcdefghijklmnopqrstuvwxyz"));
console.log(myString("smallword"));
console.log(str);
console.log('letter count' + ' ' + mystring.length);