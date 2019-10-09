
var header = document.getElementById("header")

const h2 = document.createElement("h2")
h2.textContent = "Javascript Made This"
h2.className = "header"
header.appendChild(h2)  

const p = document.createElement("p")
p.innerHTML = `<span class='nameColor'>Kevin</span> wrote the javascript`
p.className = "header"
header.appendChild(p)


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

// var themeChange = document.getElementById("theme-drop-down")
// if (themeChange === "theme-two") {
    var background = document.getElementById(id).style.backgroundColor;
    document.getElementsByClassName(right[0]).style.background = "red";
    document.getElementsByClassName(left[1]).style.background = "black";

    // function colorchange(id) {

    //     var background = document.getElementById(id).style.backgroundColor;
    //     if (background == "rgb(255, 145, 0)") {
    //         document.getElementById(id).style.background = "rgb(26,255,0)";
    //     } else {
    //         document.getElementById(id).style.background = "rgb(255,145,0)";
    //     }
    
    // }


// element.classList.toggle("theme-two")


//     themeChange.innerHTML = <option value="theme-two">red/black</option>
// }