document.getElementById("squareBox").addEventListener("mouseenter", function() {
    
    squareBox.style.backgroundColor = "blue"
})

document.getElementById("squareBox").addEventListener("mousedown", function() {
    squareBox.style.backgroundColor = "red"
})

document.getElementById("squareBox").addEventListener("mouseup", function() {
    squareBox.style.backgroundColor = "yellow"
})

document.getElementById("squareBox").addEventListener("dblclick", function() {
    squareBox.style.backgroundColor = "green"
})

document.getElementById("squareBox").addEventListener("wheel", function() {
    squareBox.style.backgroundColor = "orange"
})
document.addEventListener("keypress", (e) => {
    if(e.key == "b") {
    document.getElementById("squareBox").style.backgroundColor = "blue"
    }
});
document.addEventListener("keypress", (e) => {
    if(e.key == "r") {
    document.getElementById("squareBox").style.backgroundColor = "red"
    }
});
document.addEventListener("keypress", (e) => {
    if(e.key == "y") {
    document.getElementById("squareBox").style.backgroundColor = "yellow"
    }
});
document.addEventListener("keypress", (e) => {
    if(e.key == "g") {
    document.getElementById("squareBox").style.backgroundColor = "green"
    }
});
document.addEventListener("keypress", (e) => {
    if(e.key == "o") {
    document.getElementById("squareBox").style.backgroundColor = "orange"
    }
});