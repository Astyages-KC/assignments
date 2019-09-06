const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubleNumbers = arry.map(x => x * 2);
console.log(doubleNumbers);

// const stringItUp = arry.map(function(e){return e.toString()})
// console.log(stringItUp)

const stringIt = arry.map(a => a.toString())

console.log(stringIt)

arryName = ["frank", "bob", "sevenof9", "jenny"]
const capitalizeNames = arryName.map(name => name[0].toUpperCase() + name.slice(1))
console.log(capitalizeNames)



function namesOnly(arr){
    return arr.map(person => person.name)
  }
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 


function ageOnly(arr){
    return arr.map(person => person.age >= 18 ? person.name + " can go to he Matrix": person.name + " cannot go to The Matrix")
}
console.log(ageOnly([{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]))
// if(ageOnly() >= 18) {
//     console.log(arr.name)

// }

  


  // ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]