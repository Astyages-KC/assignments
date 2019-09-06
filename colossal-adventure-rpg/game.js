const readline = require("readline-sync");

//////////////////////
///global variables////
let endGame = false;
let aliveDead = false;

const player = {
  health: 100,
  inventory: {
    goldPeices: 0,
    manaPotions: 2
  }
};

const monsters = {
  0: {
    monsterName: "goblin",
    damageDealt: 10
  },
  1: {
    monsterName: "ogre",
    damageDealt: 22
  },
  2: {
    monsterName: "beholder",
    damageDealt: 37
  }
};

//////////////////////
///game functions ////
////walk function///
function walk() {
  const randNum = Math.floor(Math.random() * 3);
  if (randNum >= 2) {
    let monster = createMons();
    console.log(
      `Master ${name}, you have encountered a ${monster.monsterName} 
      hitting for ${monster.damageDealt} damage, ouch!`
    );
    fightOrRun();
  } else {
    console.log(`${name} enjoys his walk`);
  }
}

function createMons() {
  const randNum = Math.floor(Math.random() * 3) - 1;
  // if math returns 0
  console.log(`A ${monsters[randNum]} is in Sight!`);
  // monsters[randNum] is now {
  //  monsterName: "goblin",
  //  damageDealt: 10
  // }
  return monsters[randNum];
  // this returns the entire object
}

/////////Fight or Run function////////
function fightOrRun() {
  const fightRun = readline.keyInSelect(
    ["Cast Spell", "Run Away"],
    "Would you like to cast Fireball or Run away?"
  );
  if (fightRun === 0) {
    console.log("You prepare your spells");
    fightMon();
  } else if (fightRun === 1) {
    console.log("Run Away!!!!!!");
    runFrom();
  } else {
    console.log(`Cya later ${name}`);
    aliveDead = true;
  }
}

////////// Fight monster /////////

function fightMon() {
  const randNum = Math.floor(Math.random() * 3);
  if (randNum >= 2) {
    console.log("You try to cast a fireball but it fizzles out");
    // dmgTaken()
    if (player.health <= 0) {
      console.log("you dead");
      aliveDead = true;
    }
  } else {
    console.log("Your fireball spell blasts the monster and he dies in agony");
    // justRewards()
  }
}

/////////Run from function//////

function runFrom() {
  const randNum = Math.floor(Math.random() * 3);
  if (randNum >= 2) {
    console.log("You attempt to flee but the creature hits you");
    //dmgTaken()
  } else {
    console.log("You run away sucseccfully");
  }
}

//////monster function////////

///////inventory function///////
function displayInv() {
  for (const [key, value] of Object.entries(player.inventory)) {
    console.log(key, value);
  }
}

//////GAMEPLAY//////

const name = readline.question(
  "Hello wizard!  Welcome to the Colossal world of TextQuest!!!  What is your name? "
);

console.log(`Welcome master wizard ${name}`);

while (!aliveDead) {
  if (player.health <= 0) {
    console.log("you dead");
    aliveDead = true;
  }
  const playerInput = readline.keyInSelect(
    ["Walk", "Inspect"],
    "Your choice is to Walk or Inspect your hp and inventory"
  );
  if (playerInput === 0) {
    console.log("You went for a walk");
    walk();
  } else if (playerInput === 1) {
    console.log("Your current inventory is ");
    displayInv();
  } else {
    console.log(`Cya ${name}`);
    aliveDead = true;
  }
}
