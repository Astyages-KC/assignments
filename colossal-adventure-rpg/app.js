const readline = require("readline-sync")

//////////////////////
///global variables////
let gameOver = false
let movePrint = false
let fightRun = false

//////////////////////
///game functions ////



////////////////
//////game//////




const enemies = ["Goblin", "Kobold", "Ogre"]
const treasure = ["Silver piece", "Gold piece", "Ruby"]

player.name = readline.question("Welcome to the Colossal world of TextQuest!!!  What is your name? ")
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

while(!gameOver){
    const choose = readline.keyInSelect("Walk", "What would you like to do?  walk or inv")
    // console.log(choose)
    // if(choose === 0){
    //     console.log("You went walking")
    //     } else if(choose === -1){
        const randomNumber = Math.floor(Math.random() * 3)
        if(randomNumber === 0) {
            //fight
        }
            console.log("you want to cancel")
        }
    }
