const readline = require("readline-sync")

const name = readline.question("Welcome to the Colossal world of TextQuest!!!  What is your name? ")

let myInv = {
    goldPeices: 0,
    manaPotions: 2,
    playerHealth: 100,
}

for (const [key, value] of Object.entries(myInv))
console.log(key, value);

