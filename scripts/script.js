
const deButton = document.querySelector("nav button")
const trailerIframe = document.querySelector("main a:nth-child(1)")
const videoFrame = document.querySelector("iframe")
const kleuren = ["#86EDFC", "#FC93FF", "#989FFB", "#D3DADA", "#F68CA8", "#95F5DC", "#F2F4F2", "#FAF6A6", "#FABA80", "#CE8998"]
const dialogOpen = document.querySelector(".liedje")
const muziekModal = document.querySelector("dialog")
const sluitKnop = document.querySelector("dialog button")



deButton.addEventListener("click", function() {
  deButton.classList.toggle("toonX");
  toggleMenu();
});

function toggleMenu() {  
  let deNav = document.querySelector("nav")

  deNav.classList.toggle("toonMenu")
}



if (muziekModal && dialogOpen && sluitKnop) {
dialogOpen.addEventListener("click",() => {
  muziekModal.showModal()
})

sluitKnop.addEventListener("click",() =>{
  muziekModal.close()
} )
}

trailerIframe.addEventListener("mouseenter", autoPlay)
trailerIframe.addEventListener("mouseleave", autoPlayUit)
trailerIframe.addEventListener("touchstart", autoPlay)



/*locomotivescroll voor de lol met een bron gedaan */

const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});

const observerOptions = {
  root: null, 
  rootMargin: "0px 0px -40% 0px",
  threshold: 1.0
}

const paragraphs  = document.querySelectorAll("p")


/* aan de hand van de mdn intersection page */
const observer = new IntersectionObserver((entries) => {  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animatie")
    } 
  })
}, observerOptions) 

paragraphs .forEach((p) => observer.observe(p));/* deze lijn is met de hulp van chat gpt gemaakt. */


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


