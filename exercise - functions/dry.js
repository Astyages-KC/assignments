function sum(num1, num2) {
    return num1 + num2
}
var answer= sum(345, 255);
console.log(answer)

var largestNum = 0;

function numbersTri(numb1, numb2, numb3) {
    if (numb1 > numb2 && numb1 > numb3) 
        largestNum = numb1;
        else if (numb3 > numb2 && numb3 > numb1)
        largestNum = numb3;
        else
        largestNum = numb2;
}

var nummbers = numbersTri(50, 200, 3);
console.log(largestNum)

function oddOrEven(num1eo){
    let isEven = true;
    for(let i = 0; i < num1eo; i++)
    isEven = !isEven
}
    if (isEven) {
        return "even"
    } else {
        return "odd"
    }
console.log(oddOrEven(7))
console.log(oddOrEven(6))

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
// console.log(str);
// console.log('letter count' + ' ' + mystring.length);