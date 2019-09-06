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


const name = readline.question("Welcome to the Colossal world of TextQuest!!!  What is your name? ")

console.log(`Thank you ${name}`)





let myInv = {
    goldPeices: 0,
    manaPotions: 2,
    playerHealth: 100,
}

for (const [key, value] of Object.entries(myInv))
console.log(key, value);




function Monster(nameMon, randomNess, damDealt) {
    this.nameMon = nameMon
    this.randomNess = randomNess
    this.damDealt = damDealt
}
    Monster.prototype.showMonster = 
    function () {
        console.log(this)
    }

    const goblin = new Monster("Goblin", ".65", "10")
    const ogre = new Monster("Ogre", ".40", "22")
    const beholder = new Monster("Beholder", ".3", "37")


    // function Monster(nameMon, damDealt) {
//     this.nameMon = nameMon
//     this.damDealt = damDealt
// }
//     Monster.prototype.showMonster = 
//     function () {
//         console.log(this)
//     }

//     const goblin = new Monster("Goblin", "10")
//     const ogre = new Monster("Ogre", "22")
//     const beholder = new Monster("Beholder", "37")

//     const monsters = [goblin, ogre, beholder]
//     const randMon = Math.floor(Math.random()*3)
//         if(randMon === 0) {
//             monstToFight = monsters[0]
//         } else if(randMon === 1) {
//             monstToFight = monsters[1]
//         } else {
//                 monstToFight = monsters[2]
//         }
//         console.log(monstToFight