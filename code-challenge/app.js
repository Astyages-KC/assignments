// Remove Duplicates

    // Objective: Given a string, remove any duplicate letters.

function removeDups(str){
    let result = ""


    for(let i = 0; i < str.length; i++ )
    if(result.indexOf(str[i])) !== -1 { 
        result += str[i]
    }
    return result 


console.log(removeDups("bookeeper larry")) // "bokepr lay"



//////another way to do it///////
// return Array.from(new Set(str)).join("")


///// my original idea - more or less///////
// return str.replace("o", "")
