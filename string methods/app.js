let capsUl = "Hello";
let capsU = capsUl.toUpperCase();
let capsL = capsUl.toLowerCase();
console.log(capsU + capsL)

let strLength = "Hello you guys!";
let strL = strLength.length / 2;
let strA = Math.floor(strL);
console.log(strA)

let strSliced = strLength.slice(0, strL);
console.log(strSliced)

let capD1 = strLength.slice(0, strA);
let capD2 = capD1.toUpperCase();
let capD3 = strLength.slice(strL);
let capD4 = capD3.toLowerCase();
console.log(capD2 + capD4)


console.log(strLength.split(" "))
let arry = strLength.split(" ");
for (let i=0; i < arry.length; i++) {
 arry[i] = arry[i].slice(0, 1).toUpperCase() + arry[i].slice(1);
}
const phrase = arry.join(" ");
console.log(phrase)



