const navIcon = document.getElementsByClassName("navIcon")[0]

navIcon.addEventListener('click', e => {
    const navMenu = document.getElementsByClassName("navMenu")[0]
    navMenu.classList.toggle("hidden")
})

const textWrap = document.querySelector('.myName')
textWrap.innerHTML = textWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: true})
  .add({
    targets: '.myName .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1800,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.myName .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1800,
    delay: (el, i) => 100 + 30 * i
  });