
var header = document.getElementById("header")

const h2 = document.createElement("h2")
h2.textContent = "Javascript Made This"
h2.className = "header"
header.appendChild(h2)  //document.getElementById("header"). stick the fucking h2 shite in that thing there

const p = document.createElement("p")
p.innerHTML = `<span class='nameColor'>Kevin</span> wrote the javascript`
p.className = "header"
header.appendChild(p)
console.log(header)

var left = document.getElementsByClassName("left")

left[0].innerHTML = "How's it going Bob"
left[1].innerHTML = "Let's grab lunch!"

var right = document.getElementsByClassName("right")

right[0].innerHTML = "It's going good"
right[1].innerHTML = "Sounds good"

var messages = document.getElementsByClassName("message")
document.getElementById("clear-button").addEventListener("click", function(){ 
left[0].innerHTML = ""
left[1].innerHTML = ""
right[0].innerHTML = ""
right[1].innerHTML = ""

})