document.badDies.addEventListener("submit", (e) => {
    e.preventDefault()
    const price =  Number((document.badDies.goombaS.value) * 5) + Number((document.badDies.boBombs.value) * 7) + Number((document.badDies.cheepCheep.value) * 11)
    document.getElementById("totalPrice").textContent = price
})