const readline = require("readline-sync")

//////////////////////
///global variables////
let gameOver = false
let movePrint = false
let fightRun = false


//////////////////////
///game functions ////



//////Inventory/////

// let myInv = {
//     goldPeices: 0,
//     manaPotions: 2,
//     playerHealth: 100,
// }

// for (const [key, value] of Object.entries(myInv))


///////monster/////////
monsterLiving = []

function Monster(nameMon, damDealt, deadAlive) {
    this.nameMon = nameMon
    this.randomHit = randomHit
    this.deadAlive = deadAlive
}
    Monster.prototype.showMonster = 
    function () {
        console.log(this)
    }

    const goblin = new Monster("Goblin", "10", "alive")
    const ogre = new Monster("Ogre", "22", "alive")
    const beholder = new Monster("Beholder", "37", "alive")

    console.log(goblin.showMonster())
    console.log(orge.showMonster())
    console.log(beholder.showMonster())




////////////////////
//////Game//////////


const name = readline.question("Welcome to the Colossal world of TextQuest!!!  What is your name? ")

console.log(`Thank you ${name}`)

while (!movePrint) {
    const playerInput = readline.keyInSelect(playerChoice, 'Your choice is to Walk or Inspect your health and inventory')
    if (playerInput === 0) {
        console.log("You took a step")
    } else if (playerInput === 1)  {
        console.log("Your current inventory is ")
        console.log(key, value);

    } else {
        console.log("You think you can leave??? lol")
        movePrint = true;
    }
}





