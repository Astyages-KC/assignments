const readline = require("readline-sync")

const firstName = readline.question('May I have your first name? ')
const lastName = readline.question('May I have your last name? ')
const equation = readline.question('Would you like to add, subtract, multiply or divide? ')
const numb1 = Number(readline.question('Enter first number: '))
const numb2 = Number(readline.question('Enter second number: '))
    let result;
    if (equation === 'add') {
        result = numb1 + numb2 
    }
        else if (equation === 'subtract') { 
            result = numb1 - numb2
        } else if (equation === 'multiply') { 
            result = numb1 * numb2
            }
            else {
                result = numb1 / numb2
            }

    console.log(`${firstName} ${lastName} your answer is ${result}`)

