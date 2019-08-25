let arry1 = [];
for (let i = 0; i < 3; i++) {
    let arry2 = [];
    for (let j=0; j < 3; j++) {
        arry2[j] = 0;
    }
    arry1[i] = arry2;
}
console.log(arry1)

let arry3 = [];
for (let i = 0; i < 3; i++) {
    let arry4 = [];
    for (let j=0; j < 3; j++) {
        arry4[j] = i;
    }
    arry3[i] = arry4;
}
console.log(arry3)

let arry5 = [];
for (let i = 0; i < 3; i++) {
    let arry6 = [];
    for (let j=0; j < 3; j++) {
        arry6[j] = j;
    }
    arry5[i] = arry6;
}
console.log(arry5)

let arry7 = [];
for (let i = 0; i < 3; i++) {
    let arry8 = [];
    for (let j=0; j < 3; j++) {
        arry8[j] = "x";
    }
    arry7[i] = arry8;
}
console.log(arry7)