const deButton = document.querySelector("nav button")

deButton.addEventListener("click", toggleMenu)

function toggleMenu() {  
    let deNav = document.querySelector("nav")
    let deHeader = document.querySelector("header section")
    let deVideo = document.querySelector("header video")

    deNav.classList.toggle("toonMenu")
  }


