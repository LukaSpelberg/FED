
const deButton = document.querySelector("nav button")
const trailerIframe = document.querySelector("main a:nth-child(1)")
const videoFrame = document.querySelector("iframe")
const kleuren = ["#86EDFC", "#FC93FF", "#989FFB", "#D3DADA", "#F68CA8", "#95F5DC", "#F2F4F2", "#FAF6A6", "#FABA80", "#CE8998"]
const section = document.querySelector(".seesCharacters")
const articles = document.querySelectorAll(".seesCharacters article")

deButton.addEventListener("click", toggleMenu)

trailerIframe.addEventListener("mouseenter", autoPlay)
trailerIframe.addEventListener("mouseleave", autoPlayUit)
trailerIframe.addEventListener("click", autoPlay)

const observerOptions = {
  root: null, 
  rootMargin: "-40% 0px -60% 0px",
  threshold: 0 
}

const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      section.style.backgroundColor = kleuren


    }
  })
}

observer.observe(articles)



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


