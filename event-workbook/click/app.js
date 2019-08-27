// make the box disapear when the user clicks it

const redbox = document.getElementsByClassName("red-box")[0]

redbox.addEventListener("click", function(e){
    e.target.style.visibility = "hidden"
})