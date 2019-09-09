const readline = require("readline-sync");

//////////////////////
///global variables////
let ifDead = false;
let playerLife = 100;
let manaReserve = 100;

const magicSpells = {
  fireBallSpellCost: 20,
  fireBallDmg: 20,
  magicMissilesCost: 10,
  mmissilesDmg: 10
}

const player = {
  health: 100,
  mana: 100,
  inventory: {
    goldPieces: 0,
    manapotions: 3,
    spellbook: 1
  }
};

// const monsters = [
//   {
//     monsterName: "Goblin",
//     monsterHealth: 20
//   },
//   {
//     monsterName: "Ogre",
//     monsterHealth: 40
//   },
//   {
//     monsterName: "Minotaur",
//     monsterHealth: 50
//   }
// ];
let manaUsed = 5;

function manaCount(manaUsed) {
  manaCounter = manaReserve - manaUsed;
}
console.log(`Wizard you are down to ${manaCounter}`)

// //////////////////////
// ///game functions ////

// ///////Random number generator////////
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// ////walk function///
// function walk() {
//   // const randNum = Math.floor(Math.random() * 3);
//   randNum = getRandomInt(1, 4)
//   if (randNum >= 1) {
//     let monster = createMons();
//     console.log(
//       `Master ${name}, you have encountered a ${monster.monsterName}!`);
//     fightOrRun(monster);
//   } else {
//     console.log(
//       `Master ${name} tramples through the forest without incedent\n`
//     );
//   }
// }

// ////////Create monster function///////////

// function createMons() {
//   const randNum = Math.floor(Math.random() * 3);
//   return monsters[randNum];
// }

// /////////Fight or Run function////////
// function fightOrRun(monster) {
//   const fightRun = readline.keyInSelect(
//     ["Cast Spell", "Run Away"],
//     "Would you like to cast a spell or Run away?"
//   );
//   if (fightRun === 0) {
//     chooseSpell();
//     console.log("Magic flares from your fingertips!");
//     fightMon(monster);
//   } else if (fightRun === 1) {
//     console.log("Run Away!!!!!!");
//     runFrom(monster);
//   } else {
//     console.log(`\nCya later ${name}\n`);
//     ifDead = true;
//   }
// }

// /////////choose spell function////////
// function chooseSpell(){
//   const spellChoice = readline.keyInSelect(
//     ["Fireball", "Magic Missiles"],
//     "What spell would you like to cast?");
// } if(spellChoice = 0 && manaCounter >= magicSpells.fireBallSpellCost) {
//   fightMon()
// } else {
//   console.log("You do not have enough mana to cast that spell")
//   fightOrRun()
// } if(spellChoice = 1 && manaCounter >= magicSpells.magicMissilesCost) {
//   fightMon()
// } else { 
//   console.log("You do not have eought mana to cast that spell")
//   fightOrRun()
// }

// ////////// Fight monster /////////

// function fightMon(monster) {
//   // const randNum = Math.floor(Math.random() * 3);
//   randNum = getRandomInt(1, 8)
//   if (randNum > 6) {
//     console.log("You try to cast the spell but it fizzles in your hand");
//     dmgTaken(monster);
//   } else {
//     console.log("Your spell blasts the monster and he dies in agony");
//     manaCount();
//     addToInv();
//   }
// }

// ///////// Damage Taken function /////////
// function dmgTaken(monster) {
//   console.log(
//     ` The creature viciously attacks you! SMACK!  Ouch! You have taken damage!\n`
//   );
//   creatureDamage = getRandomInt(12, 30);
//   playerLife = playerLife - creatureDamage;
//   console.log(`The creature hit you for ${creatureDamage} damage!`);
//   console.log(`Your health points are now equal to ${playerLife}\n`);
//   if (playerLife <= 0) {
//     console.log(`\nYou have died!  The world mourns and statues are erected to the memory of Master ${name}\nThe End\n
                                                            
                                                          
//     _ _                                                   
// -/~/ / ~|                       :;                |       ()())/())
// || | | /| ;|                     |l      _____     |;     ( V   | )
// _V)VV/ ;;;                       8o __-~     ~|   d|      |    /  /
// ///(())(__/~;;|                  "88p;.  -. _L;.oP        (_/_/ /
// (((__   __ V   |                   >,% (|  (|./)8"         ;:'  i
// )))--.'-- (( ;,8 |               ,;%%%:  ./V^^^V'          ;.   ;.
// ((|   |   /)) .,88   : ..,,;;;;,-::::::'_::|   |||         ;[8:  |
// )|  ~-~  |(|(888; ..'''::::8888oooooo.  :L^^^/,,~--._     |88::  |
// || -===- /|  |8;; '':.      oo.8888888888: ((( o.ooo8888Oo;:;:'  |
// |_~-___-~_|    -L             o 88888888b  )) 888b88888P""'     ;
// ; ~~~~;~~         " --_ .       b 888888888;(.,"888b888"  ..::;-'
// ;      ;              ~"-....  b 8888888:::::. 8888. .:;;;''
// ;    ;                  :::.  :::OOO:::::::. OO' ;;;''
// :       ;                    .      "  ::::::''    .'
//  ;                           .   L              /
// ;       ;                    +:   ~~--   :'  -';
//  :                           ;;     L    : .::/  
// ;                            ;;+_  :::. :..;;;  
//                              ;;;;;;,;;;;;;;;,;`);
//     ifDead = true;
//   } else {
//     fightOrRun(monster);
//   }
// }

// /////////Run from function//////

// function runFrom(monster) {
//   const randNum = Math.floor(Math.random() * 3);
//   if (randNum >= 1) {
//     console.log(`You attempt to flee but you trip on your mage robe...`);
//     dmgTaken(monster);
//   } else {
//     console.log("You run away sucseccfully");
//   }
// }

// ///////inventory display function///////
// function displayInv() {
//   console.log("Your current inventory is ");
//   for (const [key, value] of Object.entries(player.inventory)) {
//     console.log(key, value);
//   }
// }

// //////////Add to inventory function////////
// function addToInv() {
//   const randNum = Math.floor(Math.random() * 9);
//   console.log(`\nThe creature dropped ${randNum} gold!\n`);
//   player.inventory.goldPieces = player.inventory.goldPieces + randNum;
//   displayInv();
// }

// function manaCount() {
//   manaCounter = manaReserve - manaUsed;
//   console.log(`Wizard ${name} you are down to ${manaCounter}`)
// }

// //////GAMEPLAY//////
// console.log(`\n\n  
//                      /*)                                                        
//                    .'* *)                              
//                 __/_*_*(_                                      
//                / _______ |                                       
//               _L)/(__((_/_                                   
//              / _((|- -/))_ |                                  
//              |  ())(-)(()/ /                                         
//              '  (((()))/ '                        
//             / '  )).))/ ' |                                                     
//            / _ | - | - /_  L                                  
//           (   ( .;''';. .'  )                                    
//           _V__ /    )() __"/_                                   
//             V  (   ' /  V                                          
//              .'  '...' ' )                                         
//               / /  |  | |                                  
//              / .   .   . L                                        
//             /   .     .   |                                   
//            /   /   |   ;   L                                  
//          .'   /    @    '.  '.                                           
//      _.-'    /     @@     '-. '-._                                   
//  _.-'       |      @@@       '-.  '-.                               
// (_______________________________)____)`);

// const name = readline.question(
//   `You wake to the sound of a voice in your head. "Hello wizard!  Welcome to Darken Wood Forest. \nI have brought you here to test your magic skills.  Try to escape if you can...\n  By the way, what is your name?" `
// );

// console.log(`Wizard ${name} your current health level is ${player.health}`);
// console.log(`Wizard ${name} your current mana level is ${player.mana}`);

// while (!ifDead) {
//   if (playerLife <= 0) {
//     console.log("you dead");
//     ifDead = true;
//   }
//   const playerInput = readline.keyInSelect(
//     ["Walk", "Inspect"],
//     "Your choice is to Walk around the forest or Inspect your inventory"
//   );
//   if (playerInput === 0) {
//     console.log("You went for a walk");
//     walk();
//   } else if (playerInput === 1) {
//     displayInv();
//   } else {
//     console.log(`\nCya ${name}\n`);
//     ifDead = true;
//   }
// }

// process.on("SIGINT", () => {
//   process.exit(0);
// });
