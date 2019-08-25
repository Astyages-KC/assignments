console.log("     Preliminaries:");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 9; i >= 0; i--) {
    console.log(i);
}
var fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

console.log("     Bronze Medal:");
var arry = [];
for (let i = 0; i < 10; i++) {
    arry.push(i);
}
console.log(arry);

var evenNum = 0;
for (let i = 0; i <= 100; i++) {
    if (evenNum = (i) % 2) {
        console.log((i+1));
    }
}
console.log("     Silver Medal:");

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];
  for (let i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name);
    }

    let pplName = [];
    let occuP = [];
    for (let i = 0; i < peopleArray.length; i++) {
      pplName.push(peopleArray[i].name);
      occuP.push(peopleArray[i].occupation);
    }
    console.log(pplName);
    console.log(occuP)

    let pplEO = [];
    let pplCount =0;
    let occEO = [];
    for (let i=0; i < peopleArray.length; i++) {
        if (pplCount = (i + 1) % 2) {
            pplEO.push(peopleArray[i].name); 
            }
        }
    for (let i=0; i < peopleArray.length; i++) {
        if (pplCount = (i) % 2) 
            occEO.push(peopleArray[i].occupation);
                }
    
    
    console.log(pplEO);
    console.log(occEO);