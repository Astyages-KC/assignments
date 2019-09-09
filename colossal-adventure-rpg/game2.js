const readline = require("readline-sync");

//////////////////////
///global variables////
let ifDead = false;
let playerLife = 100;
// let manaReserve = 1;
let manaCounter = 100;
let manaUsed = 0;
let fireBallSpellCost = 20;
let fireBallDmg = 20;
let magicMissilesCost = 10;
let mmissilesDmg = 10;

const player = {
  health: 100,
  mana: 100,
  inventory: {
    goldPieces: 0,
    manapotions: 3,
    spellbook: 1
  }
};

const monsters = [
  {
    monsterName: "Goblin",
    monsterHealth: 20
  },
  {
    monsterName: "Ogre",
    monsterHealth: 40
  },
  {
    monsterName: "Minotaur",
    monsterHealth: 50
  }
];

//////////////////////
///game functions ////

///////Random number generator////////
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}