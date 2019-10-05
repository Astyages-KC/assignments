

// 1 define/understand the problem
    // return object
    // isolate important data
// 2 make a plan - pseudocode
    //  get the section of the string after the "?"
    // isolate the key value pairs
    //isolate the individual key value pairs
    // add that key value pair to the object we are returning
// 3 implement the plan --> do code
// 4 look back -  what other ways could this be solved


// function parseQuery(str){
//     // return occupation = (str.split("=")[2] && str.split("&") && str.split("/"))
//     const occupation = str.split('=')[2]
//     const name = str.split("=")[1]
//     const final = name.split("&")[0]
//     return {name: final, occupation: occupation}
// }
// console.log(parseQuery("www.website.com/api?name=rick&occupation=scientist"))




// function parseQuery(str){
//     // const final = (str.split("=")[1, 2] && str.split("&")[0])
//     // return {name: final}

// }
// console.log(parseQuery("www.website.com/api?name=rick&occupation=scientist"))

// Nate's code
function parseQuery(str){
    const result = {}
    const queryString = str.split("?")[1]
    const queryArr = queryString.split("&")
    for(let i = 0; i < queryArr.length; i++) {

    const keyValueArr = queryArr[i].split("=")
    result [keyValueArr[0]] = keyValueArr[1]
    
    }
    return result
}

console.log(parseQuery("www.website.com/api?name=rick&occupation=scientist"))