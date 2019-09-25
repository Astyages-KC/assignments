// Problem:  
// Write a function that returns an array containing the numbers 1 through 100 with the following stipulations:
    // If the number is divisible by 3, it should be replaced by "fizz".
    // If the number is divisible by 5, replace it with "buzz".
    // If the number is divisible by both 3 and 5, replace it with "fizzbuzz".
    
    function fizzBuzz() {
        const arry = []
        for(let i = 0; i < 101; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                arry.push("fizzbuzz")
            } else if (i % 3 === 0) {
                arry.push ("fizz")
            } else if (i % 5 === 0) {
                arry.push("buzz")
            } else {
                arry.push(i)
            }
        }
        return arry
    }
    console.log(fizzBuzz())
   // the array should look like this : [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11 .... ]