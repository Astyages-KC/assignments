    console.log("------- Preliminaries -------");
    if (5>3) {
    console.log("5 is greater than 3");
}
    if (cat=3) {
    console.log("3 is the length");
}
    if ("cat" === "dog") {
    console.log("the same");
    }
    else {
    console.log("not the same");
}
console.log("------- Bronze Medal -------");
    const person = {
    name: "Bobby",
    age: 12
}
    if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
}   else {
    console.log(person.name + " is not allowed to go to the movie")
}
    if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
}   else {
    console.log(person.name + " is not allowed to go to the movie")
}
    if (person.age >= 18 && person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
}   else {
    console.log(person.name + " is not allowed to go to the movie")
}
console.log("------- Silver Medal -------");
    if (1 === "1") {
    console.log("strict");
}   
    else if ("1" == 1) {
        console.log("loose")
    }
    else {
        console.log("not equal at all")
}
    if (1 <= 2 && 2 === 4) {
        console.log("yes")
    } else {
        console.log("no")
    }
console.log("------- Gold Medal -------");
if ('dog' % 1) {
    console.log("dog is a number")
}   else {
    console.log("dog is a string")
}
if ("true" === true) {
    console.log("is a boolean")
}   else {
    console.log("is not a boolean")
}
var y = [];
if (y % 1) {
    console.log("variable has been defined")
} else {
    console.log("variable has not been defined")
}

if ("s" > 12) {
    console.log("yes")
}
var myNum = 10;
if (myNum % 2) {
    console.log("myNum is odd")
} else {
    console.log("myNum is even")
}