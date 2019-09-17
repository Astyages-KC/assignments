document.flyForm.addEventListener("submit", (e) => {
    e.preventDefault()

    var diet=[]
    var checkedBoxes=document.querySelectorAll("input[name=diet]:checked")
    for(i=0; i < checkedBoxes.length; i++) {
        diet.push(checkedBoxes[i].value)
    }
    alert(`First Name: ${ document.flyForm.firstName.value}\nLast Name: ${document.flyForm.lastName.value}\nAge: ${document.flyForm.passAge.value}\nGender: ${document.flyForm.passGender.value}\nFlying to: ${document.flyForm.flyTo.value}\nDietary Restrictions: ${diet}`) 
})
