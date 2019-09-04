const readline = require("readline-sync")

let movePrint = false;
let fightRun = false;
const enemies = ["Goblin", "Kobold", "Ogre"]
const treasure = ["Silver piece", "Gold piece", "Ruby"]

const name = readline.question("Welcome to the Colossal world of TextQuest!!!  What is your name? ")
const playerChoice = ["Walk", "Print"]
const attackRun = ["Attack!", "Run Away"]


while (!movePrint) {
    const playerInput = readline.keyInSelect(playerChoice, 'Your choice is to   to Walk or check your inventory and hp')
    if (playerInput === 0) {
        console.log("You took a step")
    } else if (playerInput === 1)  {
        console.log("Your current inventory is ")
    } else {
        console.log("You think you can leave??? lol")
        movePrint = true;
    }
}

