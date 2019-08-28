document.addem.addEventListener("submit", (e) => {
    e.preventDefault()
    const answr = Number(document.addem.firstNumber.value)
    + Number(document.addem.secondNumber.value)
    document.getElementById("answr").textContent = answr
})
document.subem.addEventListener("submit", (e) => {
    e.preventDefault()
    const answr2 = Number(document.subem.firstNumber.value)
    - Number(document.subem.secondNumber.value)
    document.getElementById("answr2").textContent = answr2
})
document.mulem.addEventListener("submit", (e) => {
    e.preventDefault()
    const answr3 = Number(document.mulem.firstNumber.value)
    * Number(document.mulem.secondNumber.value)
    document.getElementById("answr3").textContent = answr3
})