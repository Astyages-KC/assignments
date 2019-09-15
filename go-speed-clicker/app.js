let count = 0;
const countNum = localStorage.getItem("speedCount")
console.log(countNum)

speedy.addEventListener("click", () => {
    count++
    const speedCount = document.getElementById("speedCount")
    speedCount.textContent = count
    localStorage.setItem("speedCount", count)
})




// const display = document.getElementById("count")
// const btn = document.getElementById("count-btn")
// //Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.
// const countNum = localStorage.getItem("count")
//     console.log(countNum)
    
// // Edit Elements
// let count = countNum
// display.textContent = count

// //Add Functionality for btn Element

// btn.addEventListener("click", () => {
//     count++
//     display.textContent = count
//     localStorage.setItem("count", count)
// })