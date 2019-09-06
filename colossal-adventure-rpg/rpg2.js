const readline = require("readline-sync")

//////////////////////
///global variables////
let endGame = false
let movePrint = false
let fightRun = false


//////////////////////
///game functions ////



////////////////
//////game//////


const name = readline.question("Welcome to the Colossal world of TextQuest!!!  What is your name? ")

console.log(`Thank you ${name}`)

while(!endGame){
    const playerOption = readline.keyInSelect("walk", "Would you like to go walk through the enchanted forest?")
    console.log("walk")
}
