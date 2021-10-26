const navLinks = document.getElementById("navLinks");
const hero = document.getElementById("hero");
const navIcon = document.getElementById("nav-icon1");
const navBar = document.getElementById("topNav");
navLinks.style.left = "100vw";
hero.style.display = "flex";
navIcon.addEventListener("click", menu);
const slideImages = ["css/img/slideShowA.jpg", "css/img/slideShowB.jpg", "css/img/slideShowC.jpg"];
/* OPEN THE HAMBURGER MENU AT THE TOP OF THE PAGE */
function menu(){
      
        if (navLinks.style.left === "100vw"){
          navLinks.style.left = "0";
          hero.style.display = "none";
          navBar.style.position = "fixed";
          navBar.style.color = "white";
          navBar.style.background ="#70c9dbff";
        } else{ 
          navBar.style.background ="white";        
          navBar.style.color = "#00a0deff";
          navBar.style.position = "relative";
          navLinks.style.left = "100vw";
          hero.style.display = "flex";
        }
}
//topNav.style.backgroundColor = "#00a0deff";
$(document).ready(function () {
  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    
  });
});
let count = 0;

/* SLIDESHOW BELOW THE "YOU GRILL WE CHILL" div */

index = 0;
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const slideShow = document.getElementById("flavorSlideShow");
leftArrow.addEventListener("click", downOne);
rightArrow.addEventListener("click", upOne);
let time = 3000;


function upOne() {
  if(index === 2){
    index = 0;
  } else {
    index += 1;
  }
  slider(index);
}

function downOne(){
  if(index === 0){
    index = 2;
  } else{
    index -= 1;
  }
  slider(index);
}

function slider(index) {
  slideShow.style.backgroundImage = "url("+slideImages[index]+")";
}
/*
var sliderOptions =
        {
            sliderId: "slider",
            effect: "17,13,1",
            effectRandom: true,
            pauseTime: 2800,
            transitionTime: 1200,
            slices: 14,
            boxes: 8,
            hoverPause: 1,
            autoAdvance: true,
            captionOpacity: 0.4,
            captionEffect: "fade",
            thumbnailsWrapperId: "thumbs",
            m: false,
            license: "mylicense"
        };
        */