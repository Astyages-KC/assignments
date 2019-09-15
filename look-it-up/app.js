const rl = require("readline-sync")

let dictionaryWords = [
  {
    word: "apple", 
    wordDef: "Fruit, comes from a tree"
  }
];

let lookUpWord = [];
const leaveDictionary = false;


while (leaveDictionary) {
  const myDictionary = rl.keyInSelect(
    ["Enter Word and definition", "Look up word and definition"], 
    "Press 1 to enter a word and definition, Press 2 to look up a word and definition, 0 to exit"
  );
    if(myDictionary === 0) {
        addWordFunction()
    } else if(myDictionary === 1) {
        lookUpFunction()
    } else {
        leaveDictionary = true;
    }
  }

  function addWordFunction() {
    const word = rl.question(
      ["Word to add?"], "Enter a word to add"
    )
    const wordDef = rl.question(
      ["Word's definition?"], "What is the words definition?" 
    )
    addWord.push(word, wordDef)
  }

  function lookUpFunction() {
    const lookForWord =rl.keyInSelect(
      ["Word to look up?"], "what word would you like to look up?"
    )
    //search array for word
    for(let i = 0; i < dictionaryWords.length; i++)
      if(lookForWord === ""[i]) {
        console.log(`${word}: ${wordDef}`)
      }
  }

/// Class code ie Catlyns ///
  // let readlinesync = require("readline-sync")

  // const options = ["Insert Word and Definition", "Look Up Word"]
  
  // const dictionary = {
  
  // }
  
  // let isRunning = true
  
  // const whatToDo = () => {
  //     const whatAreOptions = readlinesync.keyInSelect(options, "What do you want to do?")
  
  //     if (whatAreOptions === 0) {
  //         console.log("Option One")
  //         addWord()
  //     } else if (whatAreOptions === 1) {
  //         console.log("Option Two")
  //         findWord()
  //     } else {
  //         console.log("Cancel")
  //         return isRunning = false
  //     }
  // }
  
  
  // const addWord = () => {
  //     //ask a question, imput as key in our object
  //     //ask a definition, input as value in our object
  //     const currentWord = readlinesync.question("Enter New Word: ")
  //     const currentDefinition = readlinesync.question("Enter New Definition: ")
  
  //     currentWord.toLowerCase()
  //     currentDefinition.toLowerCase()
  //     dictionary[currentWord] = currentDefinition
  //     // console.log(`${currentWord}: ${currentDefinition}`)
  //     console.log(dictionary)
  
  //     //check if key:value is already there
  // }
  
  // const findWord = () => {
  //     //ask a question, compare answer against object
  //     const searchWord = readlinesync.question("What word do you want to find?")
  
  //     if (dictionary[searchWord]) {
  //         //if the word is there 
  //         console.log(dictionary[searchWord])
  //     } else {
  //         console.log("The word is not in the dictionary.")
  //     }
  // }
  
  
  
  
  // while (isRunning) {
  //     whatToDo()
  // }