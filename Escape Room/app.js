const readline = require("readline-sync")

let freeYet = false;
let hasKey = false;

const name = readline.question("What is your name? ")
const playerChoice = ["Put hand in hole", "Find the key", "Open the door"]

while (!freeYet) {
    const playerAnswer = readline.keyInSelect(playerChoice, "What is your choice?")

    if (playerAnswer === 0) {
        console.log(`${name} died`)
        deadYet = true;
    }   
        else if (playerAnswer ===2) {
            if (hasKey === true) {
            console.log(`${name} escaped!`)
            freeYet = true
        }   
            else {
            console.log(`${name} needs to find a key`)
        }}   
        else if (playerAnswer === 1) {
            console.log(`${name} found a key`)
            hasKey = true
        }   else if(playerAnswer === -1){
            console.log("Can't cancel")
        } 
    
}
