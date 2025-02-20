let hamburgerMenu = document.querySelector("#hamburger-small-version")

let fullSmallVersionBackground = document.querySelector(".full-background-small-version")

let menuSmallVersion = document.querySelector(".menu-all-list-small-version")

hamburgerMenu.addEventListener("click", function(event){
    fullSmallVersionBackground.classList.toggle("biggerBackground")
    menuSmallVersion.classList.toggle("displayOn")
})
