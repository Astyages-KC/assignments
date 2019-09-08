const rl = require("readline-sync");

//////////////////////
///global variables////
let ifDead = false;
let playerLife = 100;

const player = {
  health: 100,
  inventory: {
    goldPieces: 0,
    manapotions: 3,
    magerobe: 1,
    spellbook: 1
  }
};

const monsters = [
  {
    monsterName: "goblin",
    damageDealt: 25
  },
  {
    monsterName: "ogre",
    damageDealt: 30
  },
  {
    monsterName: "beholder",
    damageDealt: 35
  }
];

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 testi = getRandomNum(1, 3);
console.log(testi)

