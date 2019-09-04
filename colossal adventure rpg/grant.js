// function domath(num1, num2) {
//     const callback = add;
//     return callback(num1, num2)
// }
// function add(a, b) {
//     return a + b
// }
// domath(5, 10, add);

// const mything = {num1: null, num2: {}ldjflkzxjflkjsdlkfjsdlkjflskdjf};
// mything = { ...mything, num2: 8}

// let myInventory = [2, 3, 4, 0, 0];
// for (let i =0; i < myInventory.length; i++) {
//  if( myInventory[i] > 0) {
//      console.log(myInventory[i])
//  }
// }

let myInv = {
    healthPotions: 5,
    manaPotions: 2,
    playerHealth: 15,
    weapon: {
        claymore: {
            wepDmg: 12,
            armorPenetration: 0.5
        },
        shortsword: {
            wepDmg: 5,
            armorPenetration: 0
        }
    },
    weaponInHand: 'claymore'
}

console.log(myInv.healthPotions)

function listInventory () {
    for(key in myInv) {
        if((typeof myInv[key] == "object")) {
            const weapons =  myInv[key];
            for(key in weapons) {
                console.log(weapons[key]);
            }
        } else {
        console.log(`${key}: ${myInv[key]}`);
        }
    }
}
listInventory();