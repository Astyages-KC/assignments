let firstName = "Kevin";
let lastName = "Clark";
let listArray = [];
console.log(firstName + " " + lastName);

function catCount() {
  for (var i = 1; i < 9; i++) {
    console.log(i);
  }
}

function dogCount() {
  for (var i = 1; i < 4; i++) {
    console.log(i);
  }
}

function catLady() {
  var cat = prompt('enter how many cats you have');
  if (cat <= 4 && cat > 0) {
    console.log("You're a cat lover");
  } else if (cat >= 5) {
    console.log("You're a crazy cat person");
  } else {
    console.log("Why don't you like cats");
  }
}

function dogDude() {
  var dog = 3;
  if (dog <= 3 && dog >= 0) {
    console.log("You're a dog lover");
  } else if (dog >= 4) {
    console.log("You must really like dogs");
  } else {
    console.log("Why don't you like dogs");
  }
}

var cats = ["Shorthair", "Siamese", "Persian", "Ragdoll"];
for (var i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

var dogs = ["Belgian Sheepdog", "German Shepherd", "Chihuahua", "Papillon"];
for (var i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

function catBreeds() {
  var cats = ["Shorthair", "Siamese", "Persian", "Ragdoll"];
  for (var i = 0; i < cats.length; i++) {
    if (cats[i] === "Ragdoll") {
      console.log("My Ragdoll is named Lilith");
    } else {
      console.log("You might want to try a ragdoll");
    }
  }
}

function dogBreeds() {
  var dogs = ["German Shepherd", "Chihuahua", "Papillon", "Belgian Sheepdog"];
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i] === "Belgian Sheepdog") {
      console.log("My Belgian is named Hannibal");
    } else if (dogs[i] === "Chihuahua") {
      console.log("Thats not a rat that is a Dog!");
    } else {
      console.log("You might want to try a Belgian Sheepdog");
    }
  }
}

function dogPic() {
  
    console.log("Isn't he cute?");
  
}

function addToList() {
    var name = document.getElementById('names').value;
    console.log(name);
    listArray.push(name);
}

function logNames() {
    
    for( let i = 0; i <= listArray.length -1; i++) {
        console.log(listArray[i]);
        var node = document.createElement("P"); 
        let  textNode = document.createTextNode(listArray[i]);
        node.appendChild(textNode);
        document.getElementById('list2').appendChild(node);
    }
    
}

