const deButton = document.querySelector("nav button")
const trailerIframe = document.querySelector("main a:nth-child(1)")
const videoFrame = document.querySelector("iframe")

deButton.addEventListener("click", toggleMenu)

trailerIframe.addEventListener("mouseenter", autoPlay)
trailerIframe.addEventListener("mouseleave", autoPlayUit)
trailerIframe.addEventListener("click", autoPlay)


function autoPlay() {
  videoFrame.src = "https://www.youtube.com/embed/j56tGNuOqfM?autoplay=1&mute=1"
}

function autoPlayUit() {
  videoFrame.src = "https://www.youtube.com/embed/j56tGNuOqfM?si=ZJrihVAnYZP0Ta0G"
}

function toggleMenu() {  
    let deNav = document.querySelector("nav")
    let deHeader = document.querySelector("header section")
    let deVideo = document.querySelector("header video")

    deNav.classList.toggle("toonMenu")
  }


